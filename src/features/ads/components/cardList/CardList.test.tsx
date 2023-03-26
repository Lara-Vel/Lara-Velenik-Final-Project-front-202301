import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../app/store';
import { errorHandlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import CardList from './CardList';

describe('Given a CardList Component,', () => {
  beforeAll(() => server.listen());
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When component loads and API responds with error, then it should show loading and after response should render the error message', async () => {
    server.use(...errorHandlers);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardList />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      const errorMessage = screen.getByText(
        /No hemos encontrado ningún gato./i,
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test('When component loads and API responds with all ads, then it should show loading and after response should render the list', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardList />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(1);
    });
  });
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateAd from '../../pages/createAd/CreateAd';
import { renderWithProviders } from '../../mocks/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('Given a CreateAd page, when it renders then it should show a Create ad form', () => {
  renderWithProviders(
    <MemoryRouter initialEntries={['/createAd']}>
      <CreateAd />
    </MemoryRouter>,
  );
  const formElement = screen.getByTestId('form');
  expect(formElement).toBeInTheDocument();
});

test('Given a CreateAd page, when it renders then it should show the CreateAdForm component', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateAd />
      </MemoryRouter>
    </Provider>,
  );
  const formElement = screen.getByTestId('form');
  expect(formElement).toBeInTheDocument();
});

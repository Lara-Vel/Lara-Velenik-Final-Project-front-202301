import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Login from './Login';

describe('Given a Login page', () => {
  test('When there is a title, then render it on the page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});

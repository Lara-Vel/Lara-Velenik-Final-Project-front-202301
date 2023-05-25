import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Register from './Register';

describe('Given a Register page', () => {
  test('When there is a title, then render it on the page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>,
    );
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});

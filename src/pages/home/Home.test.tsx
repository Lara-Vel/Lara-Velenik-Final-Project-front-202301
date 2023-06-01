import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Home from './Home';

test('Given a Home page, when rendered then it should the home', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  );
  const heading = screen.getAllByRole('heading');
  expect(heading.length).toBe(1);
});

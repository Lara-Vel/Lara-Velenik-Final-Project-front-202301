import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Home from './Home';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

test('Given a Home page, when rendered then it should the home', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  );

  const accordionHeaders = screen.getAllByRole('heading', { level: 2 });
  const firstAccordionHeader = accordionHeaders[0];

  expect(firstAccordionHeader.classList.contains('active')).toBe(false);

  fireEvent.click(firstAccordionHeader);

  setTimeout(() => {
    expect(firstAccordionHeader.classList.contains('active')).toBe(true);

    fireEvent.click(firstAccordionHeader);

    setTimeout(() => {
      expect(firstAccordionHeader.classList.contains('active')).toBe(false);

      const state = store.getState();
      const active = state.userReducer.active;
      expect(active).toBe(null);
    }, 0);
  }, 0);

  fireEvent.click(firstAccordionHeader);

  setTimeout(() => {
    const updatedState = store.getState();
    const updatedActive = updatedState.userReducer.active;
    expect(updatedActive).toBe(null);
  }, 0);
});

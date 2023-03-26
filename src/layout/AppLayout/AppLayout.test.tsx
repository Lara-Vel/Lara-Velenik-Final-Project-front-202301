import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppLayout from './AppLayout';

test('render page', () => {
  render(<AppLayout />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});

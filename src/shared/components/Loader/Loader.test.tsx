import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Loader from './Loader';

describe('Given a Loader component', () => {
  test('When rendered, Then it should show a spinner', () => {
    render(<Loader />, { wrapper: MemoryRouter });
    const divElement = screen.getByTestId('spinner');
    expect(divElement).toBeInTheDocument();
  });
});

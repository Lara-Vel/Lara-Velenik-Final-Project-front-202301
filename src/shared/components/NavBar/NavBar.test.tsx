import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../mocks/test-utils';
import NavBar from './NavBar';

describe('Given a recipe Navigation Bar component', () => {
  test('When rendered, Then it should show the Navigation Bar', () => {
    renderWithProviders(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const imageElement = screen.getByRole('img');
    const linkElementsList = screen.getAllByRole('link');
    expect(imageElement).toBeInTheDocument();
    expect(linkElementsList.length).toEqual(2);
  });
  test('When user click hamburguer menu, Then it should change the className', () => {
    renderWithProviders(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const linkElement = screen.getByTestId('burger');
    userEvent.click(linkElement);
  });
  test('When user clicks hamburger menu, Then nav-menu__items should be active', async () => {
    renderWithProviders(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    const menuButton = screen.getByTestId('burger');

    userEvent.click(menuButton);
    await fireEvent.click(menuButton);
    const menuItems = screen.getByTestId('burger');
    expect(menuItems).not.toHaveClass('active');
  });
});

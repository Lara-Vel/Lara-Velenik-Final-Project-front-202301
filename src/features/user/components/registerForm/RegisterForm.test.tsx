import { screen, waitFor } from '@testing-library/react';
import RegisterForm from './RegisterForm';
import { server } from '../../../../mocks/server';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../mocks/test-utils';
import { MemoryRouter } from 'react-router-dom';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a register form component', () => {
  test('When a user tries to register with a valid name, surname, email and password, then he should be registered', async () => {
    renderWithProviders(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>,
    );

    await userEvent.type(screen.getByPlaceholderText('Nombre'), 'nombre');

    await userEvent.type(screen.getByPlaceholderText('Apellido'), 'apellido');

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'emailtest@gmail.com',
    );

    await userEvent.type(
      screen.getByPlaceholderText('Contraseña'),
      'contraseña',
    );
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Registro completado')).toBeInTheDocument();
    });
  });

  test('When there is an error while register, then the user should receive an error message as feedback', async () => {
    renderWithProviders(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>,
    );

    await userEvent.type(screen.getByPlaceholderText('Nombre'), 'nombre');

    await userEvent.type(screen.getByPlaceholderText('Apellido'), 'apellido');

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'secondemailtest@gmail.com',
    );
    await userEvent.type(
      screen.getByPlaceholderText('Contraseña'),
      'contraseña',
    );
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Error datos incorrectos')).toBeInTheDocument();
    });
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import LoginForm from './LoginForm';
import { server } from '../../../../mocks/server';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a login form component', () => {
  test('When a user tries to login with a valid email and password, then he should receive his access token', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

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
      expect(screen.getByText('Acceso correcto')).toBeInTheDocument();
    });
  });

  test('When there is an error while logging in, then the user should receive an error message as feedback', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

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

import { MemoryRouter } from 'react-router-dom';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateAdForm from '../../../ads/components/createAdForm/CreateAdForm';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a Create ad component', () => {
  describe('When the user tries create his ad', () => {
    test('Then the ad should be created', async () => {
      const mockCreateObjectURL = jest.fn();
      global.URL.createObjectURL = mockCreateObjectURL;
      mockCreateObjectURL.mockReturnValue('');
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          msg: 'Anuncio guardado',
        }),
      });
      renderWithProviders(
        <MemoryRouter>
          <CreateAdForm />
        </MemoryRouter>,
      );

      const inputAdName = screen.getByPlaceholderText('Nombre');
      const inputAdSurname = screen.getByPlaceholderText('Apellido');
      const inputAdEmail = screen.getByPlaceholderText('Email');
      const inputAdPhone = screen.getByPlaceholderText('Teléfono');
      const inputAdCity = screen.getByPlaceholderText('Ciudad');
      const fileInput = screen.getByTestId('File');
      const imageElement = screen.getByAltText('Insertar imagen');

      await userEvent.selectOptions(screen.getByRole('combobox'), 'Oriental');
      await userEvent.type(inputAdName, 'Lara');
      await userEvent.type(inputAdSurname, 'Velenik');
      await userEvent.type(inputAdEmail, 'lara@gmail.com');
      await userEvent.type(inputAdPhone, '611111111');
      await userEvent.type(inputAdCity, 'Sevilla');

      const file = new File(['test-image'], 'image/png');
      const event = { target: { files: [file] } };
      fireEvent.change(fileInput, event);

      await userEvent.click(screen.getByRole('button'));

      expect(screen.getByText('Anuncio guardado')).toBeInTheDocument();
      expect(imageElement).toHaveAttribute(
        'src',
        '../assets/images/camera.png',
      );
    });
  });

  test('When a user upload a image, then file input and preview img should change', () => {
    const mockCreateObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    mockCreateObjectURL.mockReturnValue('../assets/images/camera.png');
    renderWithProviders(
      <MemoryRouter>
        <CreateAdForm />
      </MemoryRouter>,
    );
    const fileInput = screen.getByTestId('File');
    const imageElement = screen.getByAltText('Insertar imagen');

    const file = new File(['test-image'], 'image/png');
    const event = { target: { files: [file] } };
    fireEvent.change(fileInput, event);

    expect(imageElement).toHaveAttribute('src', '../assets/images/camera.png');
  });
  test('When a user does not upload a image, then it shoud show default img', () => {
    const mockCreateObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    mockCreateObjectURL.mockReturnValue('');
    renderWithProviders(
      <MemoryRouter>
        <CreateAdForm />
      </MemoryRouter>,
    );
    const fileInput = screen.getByTestId('File');
    const imageElement = screen.getByAltText('Insertar imagen');
    const event = { target: { files: [] } };
    fireEvent.change(fileInput, event);

    expect(imageElement).toHaveAttribute('src', '../assets/images/camera.png');
  });

  describe('When the user tries create an ad with wrong data', () => {
    test('Then its should recived a error', async () => {
      const mockCreateObjectURL = jest.fn();
      global.URL.createObjectURL = mockCreateObjectURL;
      mockCreateObjectURL.mockReturnValue('');
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue({
          msg: 'Error datos erróneos',
        }),
      });
      renderWithProviders(
        <MemoryRouter>
          <CreateAdForm />
        </MemoryRouter>,
      );

      const inputAdName = screen.getByPlaceholderText('Nombre');
      const inputAdSurname = screen.getByPlaceholderText('Apellido');
      const inputAdEmail = screen.getByPlaceholderText('Email');
      const inputAdPhone = screen.getByPlaceholderText('Teléfono');
      const inputAdCity = screen.getByPlaceholderText('Ciudad');
      const fileInput = screen.getByTestId('File');
      const imageElement = screen.getByAltText('Insertar imagen');

      await userEvent.selectOptions(screen.getByRole('combobox'), 'Oriental');
      await userEvent.type(inputAdName, 'Lara');
      await userEvent.type(inputAdSurname, 'Velenik');
      await userEvent.type(inputAdEmail, 'lara@gmail.com');
      await userEvent.type(inputAdPhone, '611111111');
      await userEvent.type(inputAdCity, 'Sevilla');
      const file = new File(['test-image'], 'image/png');
      const event = { target: { files: [file] } };
      fireEvent.change(fileInput, event);

      await userEvent.click(screen.getByRole('button'));

      expect(screen.getByText('Error datos erróneos')).toBeInTheDocument();
      expect(imageElement).toHaveAttribute(
        'src',
        '../assets/images/camera.png',
      );
    });
  });
});

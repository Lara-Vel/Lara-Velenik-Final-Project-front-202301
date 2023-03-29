import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-utils';
import CardDetail from './CardDetail';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a CardDetail component', () => {
  describe('When the id is correct', () => {
    test('Then it should show the first card description', async () => {
      const adId = '641db6f0d1fb673e861889f4';

      renderWithProviders(
        <MemoryRouter>
          <CardDetail adId={adId} />
        </MemoryRouter>,
      );

      const description = await screen.findByText(/Soy un gato Azul Ruso/i);
      await expect(description).toBeInTheDocument();
    });
  });
  test('Then it should show the second card description', async () => {
    const adId = '641db6f0d1fb673e861889f1';

    renderWithProviders(
      <MemoryRouter>
        <CardDetail adId={adId} />
      </MemoryRouter>,
    );

    const description = await screen.findByText(/Soy un gato Balinés/i);
    await expect(description).toBeInTheDocument();
  });
});

test('Then it should show the third card description', async () => {
  const adId = '641db6f0d1fb673e861889f2';

  renderWithProviders(
    <MemoryRouter>
      <CardDetail adId={adId} />
    </MemoryRouter>,
  );

  const description = await screen.findByText(/Soy un gato Bengalí/i);
  await expect(description).toBeInTheDocument();
});

test('Then it should show the fourth card description', async () => {
  const adId = '641db6f0d1fb673e861889f3';

  renderWithProviders(
    <MemoryRouter>
      <CardDetail adId={adId} />
    </MemoryRouter>,
  );

  const description = await screen.findByText(/Soy un gato Bosque de Noruega/i);
  await expect(description).toBeInTheDocument();
});

test('Then it should show the fifth card description', async () => {
  const adId = '641db6f0d1fb673e861889f5';

  renderWithProviders(
    <MemoryRouter>
      <CardDetail adId={adId} />
    </MemoryRouter>,
  );

  const description = await screen.findByText(/Soy un gato Oriental/i);
  await expect(description).toBeInTheDocument();
});

test('Then it should show the sixth card description', async () => {
  const adId = '641db6f0d1fb673e861889f6';

  renderWithProviders(
    <MemoryRouter>
      <CardDetail adId={adId} />
    </MemoryRouter>,
  );

  const description = await screen.findByText(/Soy un gato Siberiano/i);
  await expect(description).toBeInTheDocument();
});
describe('When the id is invalid', () => {
  test('Then its should show an error message', async () => {
    server.use(...errorHandlers);
    const invalidId = '4321';
    renderWithProviders(
      <MemoryRouter>
        <CardDetail adId={invalidId} />
      </MemoryRouter>,
    );

    await waitFor(() => {
      const error = screen.getByTestId('error-msg');
      expect(error).toBeInTheDocument();
    });
  });
});

describe('When is loading', () => {
  test('Then it should show a loader', async () => {
    const adId = '641db6f0d1fb673e861889f4';

    renderWithProviders(
      <MemoryRouter>
        <CardDetail adId={adId} />
      </MemoryRouter>,
    );

    const loader = screen.getByTestId('spinner');

    expect(loader).toBeInTheDocument();
  });
});

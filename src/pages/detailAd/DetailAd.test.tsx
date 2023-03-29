import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/test-utils';
import { server } from '../../mocks/server';
import DetailAd from './DetailAd';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a Detail page', () => {
  describe('When this page is rendered', () => {
    test('Then should render a img', async () => {
      renderWithProviders(
        <MemoryRouter>
          <DetailAd />
        </MemoryRouter>,
      );

      const divElement = screen.getByTestId('spinner');
      expect(divElement).toBeInTheDocument();
    });
  });
});

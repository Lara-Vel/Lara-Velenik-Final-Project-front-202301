import { screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { renderWithProviders } from '../../../mocks/test-utils';
import { Ad } from '../../../models/ads-model';
import Card from './Card';

describe('When a Card component is rendered', () => {
  const ad: Ad = {
    _id: '123456789',
    breed: 'Oriental',
    city: 'Sevilla',
    image: '',
  };

  test('Then it should show an ad card', async () => {
    renderWithProviders(
      <MemoryRouter>
        <Card ad={ad} />
      </MemoryRouter>,
    );

    const breedElement = screen.getByText(ad.breed);
    expect(breedElement).toBeInTheDocument();

    const cityElement = screen.getByText(ad.city);
    expect(cityElement).toBeInTheDocument();

    const imgElement = await screen.findByAltText('Gato Oriental');
    expect(imgElement).toBeInTheDocument();
  });
});

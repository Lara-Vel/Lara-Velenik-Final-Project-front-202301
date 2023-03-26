import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { Ad } from '../../../models/ads-model';
import Card from './Card';

describe('When a Card component is rendered', () => {
  const ad: Ad = {
    breed: 'Oriental',
    city: 'Sevilla',
    image: '',
  };

  test('Then it should show an ad card', async () => {
    render(
      <Provider store={store}>
        <Card ad={ad} />
      </Provider>,
    );

    const breedElement = screen.getByText(ad.breed);
    expect(breedElement).toBeInTheDocument();

    const cityElement = screen.getByText(ad.city);
    expect(cityElement).toBeInTheDocument();

    const imgElement = await screen.findByAltText('Gato Oriental');
    expect(imgElement).toBeInTheDocument();
  });
});

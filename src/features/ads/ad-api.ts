import { ApiError, ApiResponse, DetailAd } from '../../models/ads-model';

export const getAllAds = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/ads`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  return response;
};

export const createNewAd = async (newAd: FormData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/ads`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
    body: newAd,
  });

  if (!response.ok) {
    throw new Error('Error datos incorrectos');
  }

  return response;
};

export const getAdById = async (id: string): Promise<ApiResponse<DetailAd>> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/${id}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
  const adResponse: ApiResponse<DetailAd> = await response.json();

  if (!response.ok) {
    throw new Error((adResponse as ApiError).message);
  }

  return adResponse as DetailAd;
};

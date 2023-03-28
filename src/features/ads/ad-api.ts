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
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/create`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      body: newAd,
    },
  );

  if (!response.ok) {
    throw new Error('Error datos incorrectos');
  }

  return response;
};

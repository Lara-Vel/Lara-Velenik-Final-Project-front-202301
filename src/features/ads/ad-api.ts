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

import { UserCredentials, UserResponse } from '../../models/user-model';

export const getTokenByUser = async (
  user: UserCredentials,
): Promise<UserResponse> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('Error datos incorrectos');
  }

  return response.json();
};

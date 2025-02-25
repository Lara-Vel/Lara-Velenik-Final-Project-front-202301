import {
  NewUserCredentials,
  UserCredentials,
  UserResponse,
} from '../../models/user-model';

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

export const registerTokenByUser = async (
  newUser: NewUserCredentials,
): Promise<UserResponse> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    },
  );

  if (!response.ok) {
    throw new Error('Error datos incorrectos');
  }

  return response.json();
};

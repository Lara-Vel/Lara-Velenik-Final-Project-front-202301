export interface User {
  email: string;
  password: string;
}

export interface NewUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface UserState extends User {
  status: 'loading' | 'idle' | 'failed';
}

export interface UserResponse {
  message: string;
  accessToken: string;
}

export type UserCredentials = Pick<User, 'email' | 'password'>;
export type NewUserCredentials = Pick<
  NewUser,
  'name' | 'surname' | 'email' | 'password'
>;

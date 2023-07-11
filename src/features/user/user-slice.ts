import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  NewUserCredentials,
  UserCredentials,
  UserResponse,
} from '../../models/user-model';
import { getTokenByUser, registerTokenByUser } from './user-api';

export type AuthStatus = 'idle' | 'success' | 'error';

interface AuthState {
  status: 'idle' | 'loading' | 'failed';
  loginStatus: AuthStatus;
  registerStatus: AuthStatus;
  loginMessage: string;
  registerMessage: string;
  active: boolean;
}

const initialState: AuthState = {
  status: 'idle',
  loginStatus: 'idle',
  registerStatus: 'idle',
  loginMessage: '',
  registerMessage: '',
  active: false,
};

export const getNewUserTokenAsync = createAsyncThunk(
  'user/getNewUserTokenAsync',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);

    const newUser = Object.fromEntries(formData.entries());
    const apiResponse = await getTokenByUser(newUser as UserCredentials);

    const data: UserResponse = apiResponse;

    return data;
  },
);

export const registerNewUserTokenAsync = createAsyncThunk(
  'user/registerNewUserTokenAsync',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);

    const newRegisterUser = Object.fromEntries(formData.entries());
    const apiResponse = await registerTokenByUser(
      newRegisterUser as NewUserCredentials,
    );

    const data: UserResponse = apiResponse;

    return data;
  },
);

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNewUserTokenAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        getNewUserTokenAsync.fulfilled,
        (state, action: PayloadAction<UserResponse>) => {
          state.status = 'idle';
          state.loginStatus = 'success';
          state.loginMessage = action.payload.message;
          sessionStorage.setItem('accessToken', action.payload.accessToken);
        },
      )
      .addCase(getNewUserTokenAsync.rejected, (state, action: any) => {
        state.status = 'failed';
        state.loginStatus = 'error';
        state.loginMessage = action.error.message;
      });

    builder
      .addCase(registerNewUserTokenAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        registerNewUserTokenAsync.fulfilled,
        (state, action: PayloadAction<UserResponse>) => {
          state.status = 'idle';
          state.registerStatus = 'success';
          state.registerMessage = action.payload.message;
          sessionStorage.setItem('accessToken', action.payload.accessToken);
        },
      )
      .addCase(registerNewUserTokenAsync.rejected, (state, action: any) => {
        state.status = 'failed';
        state.registerStatus = 'error';
        state.registerMessage = action.error.message;
      });
  },
});

export const selectAuthSlice = (state: RootState) => state.userReducer;

export default userSlice.reducer;

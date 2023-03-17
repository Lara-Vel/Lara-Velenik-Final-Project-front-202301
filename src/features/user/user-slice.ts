import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserCredentials, UserResponse } from '../../models/user-model';
import { getTokenByUser } from './user-api';

export type AuthStatus = 'idle' | 'success' | 'error';

interface AuthState {
  status: 'idle' | 'loading' | 'failed';
  loginStatus: AuthStatus;
  loginMessage: string;
}

const initialState: AuthState = {
  status: 'idle',
  loginStatus: 'idle',
  loginMessage: '',
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
          sessionStorage.setItem('Bearer', action.payload.accessToken);
        },
      )
      .addCase(getNewUserTokenAsync.rejected, (state, action: any) => {
        state.status = 'failed';
        state.loginStatus = 'error';
        state.loginMessage = action.error.message;
      });
  },
});

export const selectAuthSlice = (state: RootState) => state.userReducer;

export default userSlice.reducer;

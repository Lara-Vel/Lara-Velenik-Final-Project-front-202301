import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Ad } from '../../models/ads-model';
import { getAllAds } from './ad-api';

export type AdStatus = 'idle' | 'success' | 'error';

export interface AdsResponse {
  message: string;
  ads: Ad[];
}

export interface Adstate {
  ads: Ad[];
  status: AdStatus;
  responseMessage: string | undefined;
}

const initialState: Adstate = {
  ads: [],
  status: 'idle',
  responseMessage: '',
};

export const getAllAdsAsync = createAsyncThunk('ads/getAllAds', async () => {
  const apiResponse = await getAllAds();

  const data: AdsResponse = await apiResponse.json();
  if (!apiResponse.ok) {
    throw new Error(`${data.message}`);
  }
  return data;
});

export const adsSlice = createSlice({
  name: 'adsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllAdsAsync.pending, state => {
      state.status = 'idle';
    });

    builder.addCase(
      getAllAdsAsync.fulfilled,
      (state, action: PayloadAction<AdsResponse>) => {
        state.status = 'success';
        state.ads = action.payload.ads;
        state.responseMessage = action.payload.message;
      },
    );

    builder.addCase(getAllAdsAsync.rejected, (state, action) => {
      state.status = 'error';
      state.responseMessage = action.error.message;
    });
  },
});

export const selectAdsSlice = (state: RootState) => state.adsReducer;

export default adsSlice.reducer;

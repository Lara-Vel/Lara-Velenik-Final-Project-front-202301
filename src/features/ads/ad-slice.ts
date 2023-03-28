import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Ad } from '../../models/ads-model';
import { createNewAd, getAllAds } from './ad-api';

export type AdStatus = 'idle' | 'success' | 'error';

export type NewAdStatus = 'idle' | 'success' | 'error' | 'notUsed';

export interface AdsResponse {
  message: string;
  ads: Ad[];
}

export interface CreateAdResponse {
  message: string;
  ads: Ad;
}

export interface Adstate {
  ads: Ad[];
  status: AdStatus;
  adStatus: NewAdStatus;
  createAdStatus: NewAdStatus;
  responseMessage: string | undefined;
}

const initialState: Adstate = {
  ads: [],
  status: 'idle',
  adStatus: 'notUsed',
  createAdStatus: 'notUsed',
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

export const createAdAsync = createAsyncThunk(
  `ads/createAd`,
  async (newAdForm: HTMLFormElement) => {
    const newAd = new FormData(newAdForm);
    const apiResponse = await createNewAd(newAd);

    return {
      message: 'ok',
      ads: { breed: '', city: '', image: '' },
      apiResponse,
    } as CreateAdResponse;
  },
);

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
    builder.addCase(createAdAsync.pending, state => {
      state.status = 'idle';
      state.createAdStatus = 'idle';
    });

    builder.addCase(
      createAdAsync.fulfilled,
      (state, action: PayloadAction<CreateAdResponse>) => {
        state.status = 'success';
        state.createAdStatus = 'success';
        state.responseMessage = action.payload.message;
      },
    );

    builder.addCase(createAdAsync.rejected, (state, action) => {
      state.status = 'error';
      state.createAdStatus = 'error';
      state.responseMessage = action.error.message;
    });
  },
});

export const selectAdsSlice = (state: RootState) => state.adsReducer;

export default adsSlice.reducer;

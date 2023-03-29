import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { createNewAd, getAdById, getAllAds } from './ad-api';
import { DetailAd, Ad } from '../../models/ads-model';

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
  ad: DetailAd;
  status: AdStatus;
  adStatus: NewAdStatus;
  createAdStatus: NewAdStatus;
  responseMessage: string | undefined;
}

const initialState: Adstate = {
  ads: [],
  ad: {
    _id: '',
    breed: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    image: '',
    description: '',
  },
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
      ads: { _id: '', breed: '', city: '', image: '' },
      apiResponse,
    } as CreateAdResponse;
  },
);

export const getAdByIdsAsync = createAsyncThunk(
  'ads/getAdByIdAsync',
  async (id: string) => {
    const apiResponse = await getAdById(id);

    return apiResponse;
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
    builder.addCase(getAdByIdsAsync.pending, state => {
      state.status = 'idle';
    });

    builder.addCase(getAdByIdsAsync.fulfilled, (state, action) => {
      state.status = 'success';
      state.ad = action.payload as DetailAd;
    });

    builder.addCase(getAdByIdsAsync.rejected, (state, action) => {
      state.status = 'error';
    });
  },
});

export const selectAdsSlice = (state: RootState) => state.adsReducer;

export default adsSlice.reducer;

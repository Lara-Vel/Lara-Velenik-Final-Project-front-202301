export interface Ad {
  _id: string;
  breed: string;
  city: string;
  image: string;
}

export interface DetailAd {
  _id: string;
  breed: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  city: string;
  image: string;
  description: string;
}

export type AdId = Pick<DetailAd, '_id'>;

export type ApiError = {
  message: string;
};

export type ApiResponse<T> = ApiError | T;

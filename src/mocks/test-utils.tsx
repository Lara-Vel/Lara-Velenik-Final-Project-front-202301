import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../app/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      userReducer: {
        status: 'idle',
        loginStatus: 'idle',
        registerStatus: 'idle',
        loginMessage: '',
        registerMessage: '',
      },
      adsReducer: {
        ads: [],
        status: 'idle',
        adStatus: 'idle',
        createAdStatus: 'notUsed',
        responseMessage: '',
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
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

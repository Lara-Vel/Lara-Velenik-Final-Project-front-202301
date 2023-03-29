import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout/AppLayout';
import MainLayout from '../layout/MainLayout/MainLayout';
import CreateAd from '../pages/createAd/CreateAd';
import DetailAd from '../pages/detailAd/DetailAd';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import NotFound from '../pages/notFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'detail/:_id',
        element: <DetailAd />,
      },
      {
        path: 'create-ad',
        element: <CreateAd />,
      },
    ],
  },
]);

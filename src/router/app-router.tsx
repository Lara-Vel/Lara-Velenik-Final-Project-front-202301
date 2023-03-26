import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout/AppLayout';
import MainLayout from '../layout/MainLayout/MainLayout';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

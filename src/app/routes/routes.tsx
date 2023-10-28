import { createBrowserRouter } from 'react-router-dom';
import { PageNotFound } from 'pages/PageNotFound';
import { MainLayout } from 'pages/MainLayout';

export const routes = {
  login: '/login',
};

export const browserRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

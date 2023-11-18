import { createBrowserRouter } from 'react-router-dom';

import { scheduleBrowserRoutes } from 'app/routes/schedule';
import { MainLayout } from 'pages/MainLayout';
import { PageNotFound } from 'pages/PageNotFound';

export const routes = {
  login: '/login',
};

export const browserRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [...scheduleBrowserRoutes],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layout/MainLayout/MainLayout';
import PageNotFound from 'commonPages/PageNotFound/PageNotFound';
import { scheduleBrowserRoutes } from 'routes/schedule';

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

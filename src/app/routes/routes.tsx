import { createBrowserRouter } from 'react-router-dom';
import { scheduleBrowserRoutes } from 'app/routes/schedule';
import { PageNotFound } from 'pages/PageNotFound';
import { MainLayout } from 'pages/MainLayout';

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

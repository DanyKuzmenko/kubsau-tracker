import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from 'layout/MainLayout';
import { PageNotFound } from '../commonPages/PageNotFound/PageNotFound';

export const routes = {
  login: '/login',
}

export const browserRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
  {
    path: '*',
    element: <PageNotFound />
  }
])

import { createBrowserRouter } from 'react-router-dom';

import { scheduleBrowserRoutes, scheduleRoutes } from 'app/routes/schedule';
import { tasksBrowserRoutes, tasksRoutes } from 'app/routes/tasks';
import { MainLayout } from 'pages/MainLayout';
import { PageNotFound } from 'pages/PageNotFound';

export const routes = {
  ...tasksRoutes,
  ...scheduleRoutes,
};

export const browserRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [...scheduleBrowserRoutes, ...tasksBrowserRoutes],
  },
  {
    path: '*',
    element: <PageNotFound/>,
  },
]);

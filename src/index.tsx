import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { browserRoutes } from 'app/routes/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import 'app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={''}>
      <div className={classNames('app', {}, [])}>
        <RouterProvider router={browserRoutes} />
      </div>
    </Suspense>
  </React.StrictMode>
);

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { browserRoutes } from 'app/routes/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import './app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Suspense fallback={''}>
    <div className={classNames('app')}>
      <RouterProvider router={browserRoutes} />
    </div>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { FC } from 'react';
import { Header } from 'widgets/Header';
import { Outlet } from 'react-router-dom';
import classes from './MainLayout.module.scss'

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

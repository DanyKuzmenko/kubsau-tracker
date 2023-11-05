import React, { FC } from 'react';
import styles from './MainLayout.module.scss';
import Header from 'layout/components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;

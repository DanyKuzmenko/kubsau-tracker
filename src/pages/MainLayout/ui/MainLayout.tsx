import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from 'widgets/Header';

import classes from './MainLayout.module.scss';

const MainLayout: FC = () => {
    return (
        <>
            <Header/>
            <main className={classes.main}>
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;

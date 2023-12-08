import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import headerLogo from 'assets/images/headerLogo.png';

import cls from './Header.module.scss';

const HeaderWidget: FC = () => {
  return (
    <header className={cls.header}>
      <Link to={'https://kubsau.ru/'}>
        <img src={headerLogo} alt={'Логотип КубГАУ'} />
      </Link>
    </header>
  );
};

export { HeaderWidget };

import React, { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return <header className={styles.header}>Шапка сайта</header>;
};

export { Header };

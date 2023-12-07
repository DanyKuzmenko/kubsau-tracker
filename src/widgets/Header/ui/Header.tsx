import React, { FC } from 'react';

import styles from './Header.module.scss';

const HeaderWidget: FC = () => {
  return <header className={styles.header}>Шапка сайта</header>;
};

export { HeaderWidget };

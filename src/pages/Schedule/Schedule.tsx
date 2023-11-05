import React, { FC } from 'react';
import styles from './Schedule.module.scss';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

const Schedule: FC = () => {
  return (
    <section className={styles.schedule}>
      <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.S}>
        Нажать 1
      </Button>
      <Button theme={ButtonTheme.SECONDARY} size={ButtonSize.L}>
        Нажать 2
      </Button>
      <Button theme={ButtonTheme.TERTIARY} size={ButtonSize.M}>
        Нажать 3
      </Button>
    </section>
  );
};

export default Schedule;

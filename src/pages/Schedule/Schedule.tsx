import React, { FC, useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { createWeek } from 'shared/lib/createWeek/createWeek';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { Card } from 'widgets/Card';

import cls from './Schedule.module.scss';


const Schedule: FC = () => {
  const [days, setDays] = useState([])
  const [nextWeek, setNextWeek] = useState(false);
  useEffect(() => {
    setDays(createWeek(nextWeek))
  }, [nextWeek]);


  return (
      <>
        <Button
            onClick={() => setNextWeek(false)}
            theme={ButtonTheme.TERTIARY}
            size={ButtonSize.XS}
            className={classNames(cls.button, {[cls.active]: !nextWeek}, [])}
            >
          Текущая неделя
        </Button>
        <Button
            onClick={() => setNextWeek(true)}
            theme={ButtonTheme.TERTIARY}
            size={ButtonSize.XS}
            className={classNames(cls.button, {[cls.active]: nextWeek}, [])}
        >
          Следующая неделя
        </Button>
        <section className={cls.schedule}>

          {days.map((item) => {
            return <Card date={item.date} classes={item.classes}></Card>
          })}
        </section>
      </>


  );
};

export default Schedule;

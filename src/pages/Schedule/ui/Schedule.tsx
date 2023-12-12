import React, { FC, useState } from 'react';

import { createWeek } from 'shared/lib/createWeek/createWeek';
import { Card } from 'widgets/Card';
import { Filters } from 'widgets/Filters';

import cls from './Schedule.module.scss';


type Days = {
  classes: {
    number: number;
    timeEnd: Date;
    timeStart: Date;
    isLecture: boolean;
  }[];
  date: Date;
}[];

const Schedule: FC = () => {
  const [days, setDays] = useState<Days>(createWeek(false));


  return (
    <>
      <Filters setDays={setDays} selectedPage={'schedule'}/>

      <section className={cls.schedule}>
        {days.map((item) => {
          return <Card key={item.date.toString()} date={item.date} classes={item.classes}></Card>;
        })}
      </section>
    </>
  );
};

export { Schedule };

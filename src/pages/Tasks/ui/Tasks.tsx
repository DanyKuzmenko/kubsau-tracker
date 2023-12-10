import React, { useState } from 'react';

import { createWeek } from 'shared/lib/createWeek/createWeek';
import { Card } from 'widgets/Card';
import { Filters } from 'widgets/Filters';

import cls from './Tasks.module.scss';


type Days = {
    tasks: {
        title: string;
        subject: string;
        isDone: boolean;
    }[];
    date: Date;
}[];

const Tasks = () => {
    const [days, setDays] = useState<Days>(createWeek(false))
  return (
      <>
          <Filters setDays={setDays} selectedPage={'tasks'}/>
          <section className={cls.tasks}>
              {days.map((item) => {
                  return <Card key={item.date.toString()} date={item.date} tasks={item.tasks}/>
              })}
          </section>
      </>

  );
};

export { Tasks };

import React, { FC, useEffect, useState } from 'react';

import { ScheduleCardType } from 'app/types/types';
import { ScheduleCards } from 'fakeApi/fakeApi';
import { Card } from 'widgets/Card';
import { Filters } from 'widgets/Filters';

import cls from './Schedule.module.scss';


const Schedule: FC = () => {
  const [cards, setCards] = useState<ScheduleCardType[]>();
    useEffect(() => {
        // axios.get("http://localhost:3000/api/schedule").then(response => {
        //   setCards(response.data)
        // })
        setCards(ScheduleCards)
    }, []);

  return (
    <>
      <Filters selectedPage={'schedule'}/>

      <section className={cls.schedule}>
        {cards.map((item) => {
          return <Card key={item.date.toString()} date={new Date(item.date)} lessons={item.lessons}></Card>;
        })}
      </section>
    </>
  );
};

export { Schedule };

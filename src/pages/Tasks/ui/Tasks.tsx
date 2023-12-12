import React, { useEffect, useState } from 'react';

import { createWeek } from 'shared/lib/createWeek/createWeek';
import { Card } from 'widgets/Card';
import { Filters } from 'widgets/Filters';

import cls from './Tasks.module.scss';
import axios from 'axios';


type Days = {
    tasks: {
        title: string;
        subject: string;
        isDone: boolean;
    }[];
    date: Date;
}[];
export type TaskCardType = {
  checkboxes: {
    isActive: boolean,
    title: string,
    id: string,
  }[],

  kubsauinfo: {
    auditorium: string,
    group: string,
    id: string,
    subject: string,
    teacher: string,
  }
  date: string,
  description: string;
  title: string,
  id: string,
  v?: number
}

const Tasks = () => {
    const [cards, setCards] = useState<TaskCardType[]>();
    const [days, setDays] = useState<Days>(createWeek(false))

  useEffect(() => {
    axios.get("http://localhost:3000/api/cards").then(response => {
      setCards(response.data)

    })
  }, []);

  return (
      <>
          <Filters setDays={setDays} selectedPage={'tasks'}/>
        {
          cards && <section className={cls.tasks}>
            {cards.map((item) => {
              return <Card key={item.date.toString()} date={new Date(item.date)}/>
            })}
          </section>
        }
      </>

  );
};

export { Tasks };

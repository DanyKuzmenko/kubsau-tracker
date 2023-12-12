import React, { useEffect, useState } from 'react';

import { createWeek } from 'shared/lib/createWeek/createWeek';
import { Card } from 'widgets/Card';
import { Filters } from 'widgets/Filters';

import cls from './Tasks.module.scss';
import axios from 'axios';
import { TaskCardType } from 'fakeApi/types';
import { TaskCards } from 'fakeApi/fakeApi';



const Tasks = () => {
    const [cards, setCards] = useState<TaskCardType[]>();

  useEffect(() => {
    // axios.get("http://localhost:3000/api/cards").then(response => {
    //   setCards(response.data)
    // })
    setCards(TaskCards)

  }, []);

  return (
      <>
          <Filters selectedPage={'tasks'}/>
        {
          cards && <section className={cls.tasks}>
            {cards.map((item) => {
              return <Card key={item.id} date={new Date(item.date)} tasks={item.tasks}/>
            })}
          </section>
        }
      </>

  );
};

export { Tasks };

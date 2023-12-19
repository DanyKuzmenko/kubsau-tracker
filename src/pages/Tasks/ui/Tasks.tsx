import React, { useEffect, useState } from 'react';

import { getTasks } from 'app/api/api';
import { TaskCardType } from 'app/types/types';
import { Pages } from 'features/SelectedPageLinks/ui/SelectedPageLinks';
import { weeks } from 'features/WeekButtons/ui/WeekButtons';
import { classNames } from 'shared/lib/classNames';
import { Card } from 'widgets/Card';
import { Filters } from 'widgets/Filters';

import cls from './Tasks.module.scss';

const Tasks = () => {
  const [cards, setCards] = useState<TaskCardType[]>();
  const [week, setWeek] = useState<weeks>('cur');

  useEffect(() => {
    getTasks().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <>
      <Filters selectedPage={Pages.TASKS} week={week} setWeek={setWeek} />
      {cards && (
        <section className={classNames(cls.tasks, {}, [])}>
          {cards.map((card) => {
            return <Card setCards={setCards} key={card._id} date={new Date(card.date)} tasks={card.tasks} />;
          })}
        </section>
      )}
    </>
  );
};

export { Tasks };

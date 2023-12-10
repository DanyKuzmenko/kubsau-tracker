import { FC } from 'react';

import { TaskItem } from 'features/TaskItem/TaskItem';
import { UniversityClass } from 'features/UniversityClass';
import { classNames } from 'shared/lib/classNames';

import cls from './Card.module.scss';


interface CardProps {
  date: Date;
  classes?: {
    timeStart: Date;
    timeEnd: Date;
    number: number;
  }[];
  tasks?: {
      title: string;
      subject: string;
      isDone: boolean;
  }[];
}
const Card: FC<CardProps> = ({ date, classes, tasks , }) => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const isToday = date.getDate() === new Date().getDate();
  return (
    <div className={classNames(cls.Card, { [cls['today']]: isToday }, [])}>
      <header className={cls.header}>
        <div className={cls.weekday}>{days[date.getDay()]}</div>
        <div className={cls.monthday}>
          {date.toLocaleString('ru', {
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </header>
      <div className={cls.cardContent}>
          {classes && <div className={classNames(cls.univClass, {}, [])}>
              {classes.map((item) => {
                  return <UniversityClass key={item.number} start={item.timeStart} end={item.timeEnd} />;
              })}
          </div>
          }
          {tasks && <div>
              {tasks.map((item) => {
                  return <TaskItem key={item.title} subject={item.subject} title={item.title} isDone={item.isDone}/>;
              })}
          </div>}
      </div>
    </div>
  );
};

export { Card };

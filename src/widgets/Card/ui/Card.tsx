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
    isLecture: boolean;
  }[];
}
const Card: FC<CardProps> = ({ date, classes }) => {
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
                  return <UniversityClass key={item.number} start={item.timeStart} end={item.timeEnd} isLecture={item.isLecture} />;
              })}
          </div>
          }
          {/*{task && <div>*/}
          {/*    {task.map((item) => {*/}
          {/*        return <TaskItem key={item.title} subject={item.description} title={item.title} isDone={false}/>;*/}
          {/*    })}*/}
          {/*</div>}*/}
        {/*Здесь должны быть задачи*/}
        {/*Добавить isDone выполнена ли задача в целом


        */}

      </div>
    </div>
  );
};

export { Card };

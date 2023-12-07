import { FC } from 'react';

import { UniversityClass } from 'features/univClass/UniversityClass';
import { classNames } from 'shared/lib/classNames';

import cls from './Card.module.scss';


interface CardProps {
  date: Date;
  classes: {
      timeStart: Date,
      timeEnd: Date,
      number: number
  }[];
}
const Card: FC<CardProps> = ({date, classes}) => {
const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];


 const isToday = date.getDate() === new Date().getDate();
 return (
  <div className={classNames(cls.Card, {[cls['today']]: isToday}, [])}>
      <header className={cls.header}>
          <div className={ cls.weekday }>
                  {days[date.getDay()]}
          </div>
          <div className={ cls.monthday }>
                  {date.toLocaleString('ru', {
                      month: 'long',
                      day: 'numeric'
                  })}
          </div>
      </header>
      <div className={cls.cardContent}>
          <div className= { classNames( cls.univClass, {}, []) }>
              {classes.map((item) => {
                  return <UniversityClass start={item.timeStart} end={item.timeEnd}/>
              })}
          </div>
      </div>

  </div>
 );
};

export { Card };

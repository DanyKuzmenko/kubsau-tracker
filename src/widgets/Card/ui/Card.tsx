import { FC } from 'react';

import { ClassType, TaskType } from 'app/types/types';
import { TaskItem } from 'features/TaskItem/TaskItem';
import { UniversityClass } from 'features/UniversityClass';
import { classNames } from 'shared/lib/classNames';
import { timeEnd, timeStart } from 'shared/lib/timeStartEnd/TimeStartEnd';

import cls from './Card.module.scss';

interface CardProps {
  date: Date;
  classes?: ClassType[];
  tasks?: TaskType[];
}

const Card: FC<CardProps> = ({ date, tasks, classes }) => {
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
        {classes && (
          <div className={classNames(cls.univClass, {}, [])}>
            {classes.map((item) => {
              return (
                <UniversityClass
                  key={item.number}
                  start={timeStart(date, item.number)}
                  end={timeEnd(date, item.number)}
                  lessons={item.lessons}
                />
              );
            })}
          </div>
        )}
        {tasks && (
          <div>
            {tasks.map((item) => {
              return (
                <TaskItem
                  lessonId={item.lessonId}
                  description={item.description}
                  date={date}
                  key={item._id}
                  subject={item.subject}
                  title={item.title}
                  isDone={item.isDone}
                  teachers={item.teachers}
                  checkboxes={item.checkboxes}
                  deadline={new Date(item.deadline)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export { Card };

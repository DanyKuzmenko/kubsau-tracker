import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './UniversityClass.module.scss';

interface UniversityClassProps {
  className?: string;
  start: Date;
  end: Date;
  isLecture: boolean;
  subject: string;
  auditorium: string;
  teacher: string;
}

const UniversityClass: FC<UniversityClassProps> = ({ className, start, end, isLecture, subject, auditorium, teacher }) => {
  const isGoingNow = start < new Date() && end > new Date();
  return (
    <div className={classNames(cls.UnivClass, {}, [className])}>
      <div className={classNames(cls.time, { [cls.isGoing]: isGoingNow, [cls.lecture]: isLecture}, [])}>
        <div className={cls.timeStart}>
          {start.toLocaleTimeString('ru', {
            minute: 'numeric',
            hour: 'numeric',
          })}
        </div>
        <div className={cls.timeEnd}>
          {end.toLocaleTimeString('ru', {
            minute: 'numeric',
            hour: 'numeric',
          })}
        </div>
      </div>
      <div className={cls.content}>
        <div>
          <div className={cls.subject}>{subject}</div>
          <div className={cls.teacherName}>{teacher}</div>
        </div>
        <div className={cls.classRoom}>{auditorium}</div>
      </div>
    </div>
  );
};

export { UniversityClass };

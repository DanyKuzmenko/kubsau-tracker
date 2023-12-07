import React, { FC } from 'react';

import cls from 'features/univClass/UniversityClass.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface UniversityClassProps {
  className?: string;
  start: Date;
  end: Date;
}

const UniversityClass: FC<UniversityClassProps> = ({className, start, end}) => {
    const isGoingNow = start < new Date() && end > new Date();
    return (
        <div className={classNames(cls.UnivClass, {}, [className])}>
            <div className={classNames(cls.time, {[cls.isGoing]: isGoingNow}, [])}>
                <div className={cls.timeStart}>
                    {start.toLocaleTimeString('ru', {
                        minute: "numeric",
                        hour: 'numeric'
                    })}
                </div>
                <div className={cls.timeEnd}>
                    {end.toLocaleTimeString('ru', {
                        minute: "numeric",
                        hour: 'numeric'
                    })}
                </div>
            </div>
            <div className={cls.content}>
                <div>
                    <div className={cls.subject}>Основы Web-инжиниринга</div>
                    <div className={cls.teacherName}>Лищенко К.Д.</div>
                </div>
                <div className={cls.classRoom}>420эл</div>
            </div>
        </div>
    );
};

export {UniversityClass};

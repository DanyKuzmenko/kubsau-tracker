import React, {FC} from 'react';

import {LessonType} from 'app/types/types';
import UniversityLesson from 'features/UniversityLesson/UniversityLesson';
import cls from 'features/UniversityLesson/UniversityLesson.module.scss';
import {classNames} from 'shared/lib/classNames';

interface UniversityClassProps {
    className?: string;
    start: Date;
    end: Date;
    lessons: LessonType[];
}

const UniversityClass: FC<UniversityClassProps> = ({start, end, lessons}) => {
    return (
        <div className={classNames(cls.UnivClass, {}, [])}>
            <div
                className={classNames(
                    cls.time,
                    {
                        [cls.isGoing]: start < new Date() && end > new Date(),
                        [cls.lecture]: lessons[0]?.type === 'lec',
                    },
                    []
                )}
            >
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

            {
                lessons.length > 0 && <UniversityLesson
                key={lessons[0].name}
                subject={lessons[0].name}
                type={lessons[0].type}
                teachers={lessons[0].teachers}
              />
            }
        </div>
    );
};
export {UniversityClass};

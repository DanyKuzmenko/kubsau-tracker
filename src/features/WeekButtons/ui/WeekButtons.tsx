import React, {FC} from 'react';

import {classNames} from 'shared/lib/classNames';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button';

import cls from './WeekButtons.module.scss';
import {ScheduleData} from "app/types/types";

export type weeks = 'cur' | 'next';

interface WeekButtonsProps {
    week: weeks;
    setWeek: (week: weeks) => void;
    classesInfo: ScheduleData

}

const WeekButtons: FC<WeekButtonsProps> = ({week, setWeek, classesInfo}) => {
    const handleCurrentWeekClick = (): void => {
        setWeek('cur');
    };

    const handleNextWeekClick = (): void => {
        setWeek('next');
    };

    return (
        <div className={classNames(cls.weekButtons, {[cls.hidden]: classesInfo === undefined}, [])}>
            <Button

                onClick={handleCurrentWeekClick}
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.XS}
                className={classNames(cls.button, {[cls.active]: week === 'cur'}, [])}
            >
                Текущая неделя
            </Button>
            <Button

                onClick={handleNextWeekClick}
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.XS}
                className={classNames(cls.button, {[cls.active]: week === 'next'}, [])}
            >
                Следующая неделя
            </Button>
        </div>
    );
};

export {WeekButtons};

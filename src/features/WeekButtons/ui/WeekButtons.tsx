import React, {FC, useState} from 'react';

import {classNames} from 'shared/lib/classNames';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button';

import cls from './WeekButtons.module.scss';


const WeekButtons: FC = () => {
    const [isNextWeek, setIsNextWeek] = useState<boolean>(false);

    const handleCurrentWeekClick = (): void => {
        setIsNextWeek(false);
    };

    const handleNextWeekClick = (): void => {
        setIsNextWeek(true);
    };

    return (
        <div className={cls.weekButtons}>
            <Button
                onClick={handleCurrentWeekClick}
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.XS}
                className={classNames(cls.button, {[cls.active]: !isNextWeek}, [])}
            >
                Текущая неделя
            </Button>
            <Button
                onClick={handleNextWeekClick}
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.XS}
                className={classNames(cls.button, {[cls.active]: isNextWeek}, [])}
            >
                Следующая неделя
            </Button>
        </div>
    );
};

export {WeekButtons};

import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { CheckBox } from 'shared/ui/CheckBox';

import cls from './TaskModalCheckbox.module.scss';


interface TaskModalCheckboxProps {
  className?: string;
  title: string;
  isDone: boolean;
}

const TaskModalCheckbox: FC<TaskModalCheckboxProps> = ({className, isDone, title}) => {
    return (
        <div className={classNames(cls.TaskModalCheckbox, {}, [className])}>
            <CheckBox isDone={isDone}/>
            <div className={cls.title}> {title} </div>
        </div>
    );
};

export {TaskModalCheckbox};

import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './TaskItem.module.scss';


interface TaskItemProps {
  className?: string;
  title: string;
  subject: string;
  isDone: boolean;
}

const TaskItem: FC<TaskItemProps> = ({className, title, subject, isDone}) => {
    return (
        <div className={classNames(cls.TaskItem, {}, [className])}>
            <label className= {cls.customCheckbox}>
                <input defaultChecked={isDone} type="checkbox"/>
                    <div className= {cls.checkbox}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
            </label>

            <div className={cls.descriptionContainer}>
                <div className={classNames(cls.title, {}, [])}>
                    {title}
                </div>

                <div className={cls.subject}>
                    {subject}
                </div>
            </div>
        </div>
    );
};

export {TaskItem};

import React, { FC } from 'react';

import { CheckboxType } from 'app/types/types';
import { TaskModalCheckbox } from 'features/TaskModalCheckbox/TaskModalCheckbox';
import { classNames } from 'shared/lib/classNames/classNames';
import { CheckBox } from 'shared/ui/CheckBox';

import cls from './ModalTask.module.scss';


interface ModalTaskProps {
  className?: string;
  title: string;
  deadline: Date;
  subject: string;
  teacher: string;
  description: string;
  isDone: boolean;
  checkboxes: CheckboxType[];
  isVisible: boolean;
  setIsVisible: (set: boolean) => void
}

const ModalTask: FC<ModalTaskProps> = ({className, title, checkboxes, deadline, teacher,
                                           subject, description, isDone, isVisible, setIsVisible}) => {
    const handleModalClose = () => {
        setIsVisible(false);
    }
    return (
        <div className={classNames(cls.ModalTask, {[cls.visible]: isVisible},
            [className])}>
            <div className={cls.windowHeader}>
                <CheckBox isDone={isDone}/>
                <h1 className={cls.title}>
                    {title}
                </h1>
            </div>
            <div className={cls.deadline}>
                <h2 className={cls.deadlineHeader}>Дедлайн</h2>
                <div>
                    {deadline.toLocaleDateString('ru',
                        {
                            day: 'numeric',
                            month: 'long',
                            year: "numeric",
                            weekday: "long"
                        }
                    )}
                </div>
            </div>
            <div className={cls.subject}>
                <h2 className={cls.subjectHeader}>Предмет</h2>
                <div className={cls.subjectName}>{subject}</div>
            </div>
            <div className={cls.teacher}>
                <h2 className={cls.teacherHeader}>Преподаватель</h2>
                <div className={cls.teacherName}>{teacher}</div>
            </div>
            <div className={cls.description}>
                <h2 className={cls.descriptionHeader}>Описание</h2>
                <div className={cls.descriptionBody}>{description}</div>
            </div>
            <div className={cls.checkboxes}>
                <h2 className={cls.checkboxesHeader}>Чекбоксы</h2>
                <div className={cls.checkboxesBody}>
                    {checkboxes.map(item => {
                        return <TaskModalCheckbox key={item.id} title={item.title} isDone={item.isDone}/>
                    })}
                </div>
            </div>
            <div onClick={handleModalClose} className={cls.modalClose}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.40032 7.51472L16 14.1144L22.5996 7.51472L24.4853 9.40034L17.8856 16L24.4853 22.5997L22.5996 24.4853L16 17.8856L9.40032 24.4853L7.5147 22.5997L14.1144 16L7.5147 9.40034L9.40032 7.51472Z" fill="#9DA09C"/>
                </svg>
            </div>
        </div>
    );
};

export {ModalTask};

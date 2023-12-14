import React, { FC } from 'react';

import { CheckboxType } from 'app/types/types';
import { classNames } from 'shared/lib/classNames/classNames';
import { CheckBox } from 'shared/ui/CheckBox';
import { ModalTask } from 'widgets/ModalTask/ModalTask';

import cls from './TaskItem.module.scss';


interface TaskItemProps {
  className?: string;
  title: string;
  subject: string;
  isDone: boolean;
  checkboxes: CheckboxType[];
  deadline: Date;
  teacher: string;
  description: string;
  isVisible: boolean;
  setIsVisible: (set: boolean) => void
}

const TaskItem: FC<TaskItemProps> = ({className, title, subject, isDone, description,
                                     deadline, checkboxes, teacher, isVisible, setIsVisible}) => {


    const dbClickHandle = (evt: React.MouseEvent) => {
        evt.preventDefault();
        setIsVisible(true)
    }

    return (
        <div className={classNames(cls.TaskItem, {}, [className])}>
            <CheckBox isDone={isDone}/>
            <div
                className={cls.descriptionContainer}
                onDoubleClick={dbClickHandle}
            >
                <div className={classNames(cls.title, {}, [])}>
                    {title}
                </div>

                <div className={cls.subject}>
                    {subject}
                </div>
            </div>
            <ModalTask
                checkboxes={checkboxes}
                title={title}
                subject={subject}
                isDone={isDone}
                deadline={deadline}
                teacher={teacher}
                description={description}
                isVisible={isVisible}
                setIsVisible={setIsVisible}

            />
        </div>
    );
};

export {TaskItem};

import React, { FC, useRef, useState } from 'react';

import { CheckboxType, TeacherType } from 'app/types/types';
import { classNames } from 'shared/lib/classNames/classNames';
import { CheckBox } from 'shared/ui/CheckBox';
import { ModalTask } from 'widgets/ModalTask/ModalTask';

import cls from './TaskItem.module.scss';

interface TaskItemProps {
  className?: string;
  title: string;
  subject: string;
  isDone: boolean;
  teachers: TeacherType[];
  date: Date;
  checkboxes: CheckboxType[];
  description: string;
  deadline: Date;
  lessonId: string;
}

const TaskItem: FC<TaskItemProps> = ({
  className,
  title,
  subject,
  isDone,
  teachers,
  date,
  checkboxes,
  description,
  deadline,
  lessonId,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const refObject = useRef(null);
  const handleClick = (evt: React.MouseEvent) => {
    if (evt.target === refObject.current) {
      setIsModalVisible(false);
    }
  };

  return (
    <div className={classNames(cls.TaskItem, {}, [className])}>
      <CheckBox disabled={true} isDone={isDone} />
      <div
        className={cls.descriptionContainer}
        onClick={() => {
          setIsModalVisible(true);
          window.scrollTo(0, 0);
        }}
      >
        <div className={classNames(cls.title, {}, [])}>{title}</div>

        <div className={cls.subject}>{subject}</div>
      </div>
      <ModalTask
        lessonId={lessonId}
        checkboxes={checkboxes}
        date={date}
        subject={subject}
        isDone={isDone}
        teachers={teachers}
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
      <span
        onClick={handleClick}
        ref={refObject}
        className={classNames(cls.taskModal, { [cls.modalOpen]: isModalVisible }, [])}
      ></span>
    </div>
  );
};

export { TaskItem };

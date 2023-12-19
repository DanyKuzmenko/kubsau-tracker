import React, { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { CheckBox } from 'shared/ui/CheckBox';

import cls from './TaskModalCheckbox.module.scss';

interface TaskModalCheckboxProps {
  className?: string;
  title: string;
  isDone: boolean;
}

const TaskModalCheckbox: FC<TaskModalCheckboxProps> = ({ className, isDone, title }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={classNames(cls.TaskModalCheckbox, {}, [className])}>
      <CheckBox isDone={isDone} />
      {editMode ? (
        <div className={cls.checkboxEditorContainer}>
          <input className={cls.checkboxEditor} type="text" />
          <button className={cls.checkboxEditorSave}>Сохранить</button>
        </div>
      ) : (
        <div className={cls.title}> {title} </div>
      )}
      {
        !editMode && <div className={cls.svgContainer}>
          <div className={cls.editCheckbox} onClick={() => setEditMode(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" fill="white" />
              <path
                d="M15.806 5L20 9.19379L9.19399 20H5V15.8055L15.806 5ZM15.806 11.326L17.9391 9.19379L15.806 7.06082L13.6737 9.19379L15.806 11.326ZM12.6432 10.2242L6.45751 16.4103V18.5426H8.58986L14.7755 12.3572L12.6432 10.2242Z"
                fill="#9DA09C"
              />
            </svg>
          </div>
          <div className={cls.deleteCheckbox}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" fill="white" />
              <path
                d="M8.85 4H15.15V6.18182H19V7.63636H17.5797L17.2297 20H6.7703L6.4203 7.63636H5V6.18182H8.85V4ZM10.25 6.18182H13.75V5.45455H10.25V6.18182ZM7.821 7.63636L8.1297 18.5455H15.8703L16.179 7.63636H7.821Z"
                fill="#9DA09C"
              />
              <path d="M11.3 17.0909V9.09091H9.9V17.0909H11.3Z" fill="#9DA09C" />
              <path d="M14.1 17.0909V9.09091H12.7V17.0909H14.1Z" fill="#9DA09C" />
            </svg>
          </div>
        </div>
      }
    </div>
  );
};

export { TaskModalCheckbox };

import React, { FC, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { CheckBox } from 'shared/ui/CheckBox';

import cls from './TaskModalCheckbox.module.scss';
import { deleteCheckbox, getTasksById, patchCheckbox } from 'app/api/api';
import { TaskType } from 'app/types/types';

interface TaskModalCheckboxProps {
  className?: string;
  title: string;
  isDone: boolean;
  checkboxId: string;
  setTaskData: (tasks: TaskType) => void
  lessonId: string
}

const TaskModalCheckbox: FC<TaskModalCheckboxProps> = ({lessonId, className, isDone,
                                                         title, checkboxId,setTaskData }) => {
  const [editMode, setEditMode] = useState(false);
  const [isDoneState, setIsDoneState] = useState<boolean>(isDone);
  const inputRef = useRef(null);
  const [titleState, setTitleState] = useState(title);
  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);
  const handleSaveChanges = () => {
    if (!inputRef.current?.value.trim()) {
      setEditMode(false)
      return
    }
    patchCheckbox(checkboxId, inputRef.current?.value, isDoneState).then(res => {
      setIsDoneState(res.isDone);
      setTitleState(res.title);
      console.log(res)
    })
  }
  const checkBoxClick = () => {
    patchCheckbox(checkboxId, titleState, !isDoneState).then(res => {
      setIsDoneState(res.isDone);
      setTitleState(res.title);
    })
  }
  const handleDelete = () => {
    deleteCheckbox(checkboxId).then((res) => {
    }).catch(er => {
      console.log(er);
    })
    getTasksById(lessonId).then(res => {
      setTaskData(res)
    })
  }
  return (
    <div className={classNames(cls.TaskModalCheckbox, {}, [className])}>
      <CheckBox checkBoxClick={checkBoxClick} setIsChecked={setIsDoneState} checked={isDoneState} isDone={isDone} />
      {editMode ? (
        <div className={cls.checkboxEditorContainer}>
          <input
            ref={inputRef}
            onBlur={() => {
              setTimeout(() => setEditMode(false), 150);
            }}

            placeholder={'Введите название чекбокса'}
            className={cls.checkboxEditor}
            type="text" />
          <Button onClick={handleSaveChanges} theme={ButtonTheme.SECONDARY} className={cls.checkboxEditorSave}>Сохранить</Button>
        </div>
      ) : (
        <div className={cls.title}> {titleState} </div>
      )}
      {
        !editMode && <div className={cls.svgContainer}>
          <div className={cls.editCheckbox} onClick={() => setEditMode(true)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <rect width='24' height='24' fill='white' />
              <path
                d='M15.806 5L20 9.19379L9.19399 20H5V15.8055L15.806 5ZM15.806 11.326L17.9391 9.19379L15.806 7.06082L13.6737 9.19379L15.806 11.326ZM12.6432 10.2242L6.45751 16.4103V18.5426H8.58986L14.7755 12.3572L12.6432 10.2242Z'
                fill='#9DA09C' />
            </svg>
          </div>
          <div className={cls.deleteCheckbox} onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" fill="white" />
              <path
                d="M8.85 4H15.15V6.18182H19V7.63636H17.5797L17.2297 20H6.7703L6.4203 7.63636H5V6.18182H8.85V4ZM10.25 6.18182H13.75V5.45455H10.25V6.18182ZM7.821 7.63636L8.1297 18.5455H15.8703L16.179 7.63636H7.821Z"
                fill="#9DA09C" />
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
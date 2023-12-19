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
  const [editMode, setEditMode] = useState(isDone);
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
      <CheckBox disabled={true} checkBoxClick={checkBoxClick} setIsChecked={setIsDoneState} checked={isDoneState} isDone={isDone} />
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
              <path
                d='M16.828 1.41602L22.583 7.17102L7.755 22H2V16.244L16.828 1.41602ZM16.828 10.097L19.755 7.17102L16.828 4.24402L13.902 7.17102L16.828 10.097ZM12.488 8.58502L4 17.074V20H6.926L15.414 11.512L12.488 8.58502Z'
                fill='#151615' />
            </svg>
          </div>
          <div className={cls.deleteCheckbox} onClick={handleDelete}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M7.5 1H16.5V4H22V6H19.971L19.471 23H4.529L4.029 6H2V4H7.5V1ZM9.5 4H14.5V3H9.5V4ZM6.03 6L6.471 21H17.529L17.97 6H6.03Z'
                fill="#151615" />
              <path d="M11 19V8H9V19H11Z" fill="#151615" />
              <path d="M15 19V8H13V19H15Z" fill="#151615" />
            </svg>
          </div>
        </div>
      }
    </div>
  );
};

export { TaskModalCheckbox };
import React, { FC, RefObject, useEffect, useRef, useState } from 'react';

import { createCheckbox, createTask, deleteTask, getTasks, getTasksById, patchCheckbox, patchTask } from 'app/api/api';
import { CheckboxType, TaskCardType, TaskType, TeacherType } from 'app/types/types';
import { TaskModalCheckbox } from 'features/TaskModalCheckbox/TaskModalCheckbox';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { CheckBox } from 'shared/ui/CheckBox';
import plusIcon from 'assets/images/plusIcon.svg';

import cls from './ModalTask.module.scss';

interface ModalTaskProps {
  className?: string;
  subject?: string;
  teachers?: TeacherType[];
  isDone?: boolean;
  isVisible: boolean;
  setIsVisible: (set: boolean) => void;
  date: Date;
  checkboxes?: CheckboxType[];
  lessonId: string;
  setCards?: (cards: TaskCardType[]) => void
}

const ModalTask: FC<ModalTaskProps> = ({
  setCards,
  className,
  teachers,
  subject,
  isDone,
  isVisible,
  setIsVisible,
  date,
  checkboxes,
  lessonId,
}) => {
  const [taskCreateMode, setTaskCreateMode] = useState(false);
  const [checkboxEditMode, setCheckboxEditMode] = useState(false);
  const checkboxInput: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const titleInput: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const deadlineInput: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const descriptionInput: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [taskData, setTaskData] = useState<TaskType>();

  useEffect(() => {
    // Устанавливаем фокус при появлении инпута
    checkboxInput.current?.focus();
  }, [checkboxEditMode]);
  useEffect(() => {
    getTasksById(lessonId).then((res) => {
      if (!res) {
        setTaskCreateMode(true);
      }
      setTaskData(res);
    });
  }, []);
  const handleAddCheckbox = async () => {
    setInputValue('');
    setCheckboxEditMode(false);
    if (!inputValue.trim()) {
      return;
    }
    createCheckbox(checkboxInput.current.value, lessonId).then((res) => {
      setTaskData((prevState) => {
        return { ...prevState, checkboxes: res.checkboxes };
      });
    });
    console.log('taskData', taskData);
  };
  const handleDelete = (lessonId: string, date: Date) => {
    deleteTask(lessonId, date).then((res) => {
    }).catch(er => {
      setIsVisible(false);
      getTasks().then(res => {
        setCards(res)
      })
    });
  };
  const handleSubmit = () => {
    setTaskCreateMode(false);
    const handleCheckboxChange = (id: string, title: string, isDone: boolean) => {
      patchCheckbox(id, title, isDone).then((res) => {
        console.log(res);
      });
    };

    const dateParts = deadlineInput.current.value.split('.');

    const day = parseInt(dateParts[0], 10); // Преобразование дня в число
    const month = parseInt(dateParts[1], 10) - 1; // Преобразование месяца в число (нумерация месяцев начинается с 0)
    const year = parseInt(dateParts[2], 10);

    const task = {
      title: titleInput.current?.value ? titleInput.current.value : taskData?.title,
      subject: subject,
      teachers: teachers,
      isDone: false,
      deadline: deadlineInput.current?.value ? new Date(year, month, day) : new Date(taskData?.deadline),
      description: descriptionInput.current?.value ? descriptionInput.current.value : taskData?.description,
      lessonId: lessonId,
    };
    taskData
      ? patchTask(lessonId, task).then((res) => {
          setTaskData(res);
        })
      : createTask(date, { ...task, checkboxes: checkboxes }).then((res) => {
          setTaskData(res);
        });
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  return (
    <div className={classNames(cls.ModalTask, { [cls.visible]: isVisible }, [className])}>
      <div className={cls.content}>
        <div className={cls.windowHeader}>
          <CheckBox isDone={isDone} />
          {taskData && taskData.title && !taskCreateMode ? (
            <h1 className={cls.title}>{taskData.title}</h1>
          ) : (
            <input
              ref={titleInput}
              placeholder={taskData?.title ? taskData.title : 'Введите наименование задачи'}
              className={cls.titleInput}
            ></input>
          )}
        </div>
        <div className={cls.deadline}>
          <h2 className={cls.deadlineHeader}>Дедлайн</h2>
          <div>
            {taskData && taskData.deadline && !taskCreateMode ? (
              new Date(taskData.deadline)?.toLocaleDateString('ru', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                weekday: 'long',
              })
            ) : (
              <input
                ref={deadlineInput}
                placeholder={
                  taskData?.deadline
                    ? new Date(taskData.deadline)?.toLocaleDateString('ru', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })
                    : new Date().toLocaleDateString('ru', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })
                }
                className={cls.deadlineInput}
              ></input>
            )}
          </div>
        </div>
        <div className={cls.subject}>
          <h2 className={cls.subjectHeader}>Предмет</h2>
          <div className={cls.subjectName}>{subject}</div>
        </div>
        <div className={cls.teacher}>
          <h2 className={cls.teacherHeader}>Преподаватели</h2>
          <div className={cls.teacherName}>
            {teachers?.map((teacher) => {
              return <div key={teacher.name}>{teacher.name}</div>;
            })}
          </div>
        </div>

        {!taskCreateMode && (
          <div className={cls.checkboxes}>
            <h2 className={cls.checkboxesHeader}>Чекбоксы</h2>
            <div className={cls.checkboxesBody}>
              {taskData &&
                taskData.checkboxes &&
                taskData.checkboxes.length > 0 &&
                taskData.checkboxes.map((item) => {
                  return <TaskModalCheckbox lessonId={lessonId} setTaskData={setTaskData} checkboxId={item._id} key={item._id} title={item.title} isDone={item.isDone} />;
                })}
              {checkboxEditMode ? (
                <input
                  className={cls.checkboxesInput}
                  ref={checkboxInput}
                  type='text'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onBlur={() => setCheckboxEditMode(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddCheckbox();
                    }
                  }}
                />
              ) : taskData ? (
                <Button
                  onClick={() => {
                    setCheckboxEditMode(true);
                  }}
                  className={cls.checkboxesButton}
                  theme={ButtonTheme.ICON}
                  size={ButtonSize.S}
                >
                  <img src={plusIcon} alt={'Добавить.'} />
                  Добавить
                </Button>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}

        <div className={cls.description}>
          <h2 className={cls.descriptionHeader}>Описание</h2>
          {taskData && taskData.description && !taskCreateMode ? (
            <div className={cls.descriptionBody}>{taskData.description}</div>
          ) : (
            <textarea
              ref={descriptionInput}
              rows={6}
              className={cls.descriptionInput}
              placeholder={taskData?.description ? taskData?.description : 'Напишите описание к задаче'}
            ></textarea>
          )}
        </div>

        <>
          {taskCreateMode ? (
            <Button className={cls.saveDeleteButton} onClick={handleSubmit} theme={ButtonTheme.PRIMARY}>
              Сохранить
            </Button>
          ) : (
            <div className={cls.saveDeleteButton}>
              <button className={cls.deleteButton} onClick={() => handleDelete(lessonId, date)}>
                Удалить
              </button>
              <Button onClick={() => setTaskCreateMode(true)} theme={ButtonTheme.PRIMARY} className={cls.saveButton}>
                Редактировать
              </Button>
            </div>
          )}
        </>

        <div onClick={closeModal} className={cls.modalClose}>
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d="M9.40032 7.51472L16 14.1144L22.5996 7.51472L24.4853 9.40034L17.8856 16L24.4853 22.5997L22.5996 24.4853L16 17.8856L9.40032 24.4853L7.5147 22.5997L14.1144 16L7.5147 9.40034L9.40032 7.51472Z"
              fill="#9DA09C"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { ModalTask };

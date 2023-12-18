import React, {FC, RefObject, useEffect, useRef, useState} from 'react';

import {CheckboxType, TeacherType} from 'app/types/types';
import {TaskModalCheckbox} from 'features/TaskModalCheckbox/TaskModalCheckbox';
import {classNames} from 'shared/lib/classNames/classNames';
import {CheckBox} from 'shared/ui/CheckBox';

import cls from './ModalTask.module.scss';
import {Button, ButtonSize, ButtonTheme} from "../../shared/ui/Button";


interface ModalTaskProps {
    className?: string;
    title?: string;
    subject?: string;
    teachers?: TeacherType[];
    isDone?: boolean;
    isVisible: boolean;
    setIsVisible: (set: boolean) => void
    date: Date,
    checkboxes?: CheckboxType[]
    description?: string
    deadline?: Date
}

const ModalTask: FC<ModalTaskProps> = ({
                                           className, title, teachers, subject,
                                           isDone, isVisible, setIsVisible, date,
                                           checkboxes,description,  deadline
                                       }) => {
    const [hasFetched, setHasFetched] = useState<boolean>(true);
    const [checkboxEditMode, setCheckboxEditMode] = useState(false)
    const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState('');
    const [localCheckboxes, setLocalCheckboxes] = useState<CheckboxType[]>([]);
    useEffect(() => {
        // Устанавливаем фокус при появлении инпута
        inputRef.current?.focus();
    }, [checkboxEditMode]);
    const handleAddCheckbox = () => {
        if (inputValue.trim() !== '') {
            setLocalCheckboxes((prevCheckboxes) => [
                ...prevCheckboxes,
                {_id: Date.now().toString(), title: inputValue, isDone: false},
            ]);
            setInputValue('');
            setCheckboxEditMode(false);
        }
    };
    const closeModal = () => {
        setIsVisible(false);
    }
    return (
        <div className={classNames(cls.ModalTask, {[cls.visible]: isVisible},
            [className])}>
            {hasFetched && <div className={cls.content}>
              <div className={cls.windowHeader}>
                <CheckBox isDone={isDone}/>
                  {title
                      ? <h1 className={cls.title}>{title}</h1>
                      :
                      <input placeholder={"Введите название задачи"} className={cls.titleInput}></input>
                  }
              </div>
              <div className={cls.deadline}>
                <h2 className={cls.deadlineHeader}>Дедлайн</h2>
                <div>
                    {deadline
                        ? new Date(deadline).toLocaleDateString('ru',
                            {
                                day: 'numeric',
                                month: 'long',
                                year: "numeric",
                                weekday: "long"
                            })
                        :
                        <input placeholder={"Введите дату"} className={cls.deadlineInput}></input>
                    }
                </div>
              </div>
              <div className={cls.subject}>
                <h2 className={cls.subjectHeader}>Предмет</h2>
                <div className={cls.subjectName}>{subject}</div>
              </div>
              <div className={cls.teacher}>
                <h2 className={cls.teacherHeader}>Преподаватели</h2>
                <div className={cls.teacherName}>{
                    teachers?.map((teacher) => {
                        return <div key={teacher.name}>{teacher.name}</div>
                    })}</div>
              </div>

              <div className={cls.checkboxes}>
                <h2 className={cls.checkboxesHeader}>Чекбоксы</h2>
                <div className={cls.checkboxesBody}>
                    {checkboxes && checkboxes.length > 0 &&
                        checkboxes.map(item => {
                            return <TaskModalCheckbox key={item._id} title={item.title} isDone={item.isDone}/>
                        })
                    }
                    {checkboxEditMode
                        ?
                        <input
                            className={cls.checkboxesInput}
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onBlur={() => setCheckboxEditMode(false)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleAddCheckbox();
                                }
                            }}
                        />
                        :
                        <Button
                            onClick={() => {
                                setCheckboxEditMode(true)
                            }}
                            className={cls.checkboxesButton} theme={ButtonTheme.SECONDARY} size={ButtonSize.S}
                        >Добавить</Button>
                    }
                </div>
              </div>
              <div className={cls.description}>
                <h2 className={cls.descriptionHeader}>Описание</h2>
                  {description
                      ?
                      <div className={cls.descriptionBody}>{description}</div>
                      :
                      <textarea rows={6} className={cls.descriptionInput}
                                placeholder={"Напишите описание к задаче"}></textarea>
                  }
              </div>


              <Button
                onClick={() => alert('Вы чмо')}
                className={cls.saveButton}
                theme={ButtonTheme.PRIMARY}
              >Сохранить</Button>


              <div onClick={closeModal} className={cls.modalClose}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.40032 7.51472L16 14.1144L22.5996 7.51472L24.4853 9.40034L17.8856 16L24.4853 22.5997L22.5996 24.4853L16 17.8856L9.40032 24.4853L7.5147 22.5997L14.1144 16L7.5147 9.40034L9.40032 7.51472Z"
                    fill="#9DA09C"/>
                </svg>
              </div>
            </div>

            }
        </div>
    );
};

export {ModalTask};

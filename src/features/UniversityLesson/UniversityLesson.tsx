import React, { FC, useRef, useState } from 'react';

import { TeacherType } from 'app/types/types';
import { classNames } from 'shared/lib/classNames';
import { ModalTask } from 'widgets/ModalTask/ModalTask';

import cls from './UniversityLesson.module.scss';

interface UniversityLessonProps {
  className?: string;
  type: 'lec' | 'pract' | '';
  teachers: TeacherType[];
  subject: string;
  date: Date;
  lessonId: string;
}

const UniversityLesson: FC<UniversityLessonProps> = ({ teachers, subject, type, date, lessonId }) => {
  const refObject = useRef(null);
  const handleClick = (evt: React.MouseEvent) => {
    if (evt.target === refObject.current) {
      setIsModalVisible(false);
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <div
        className={cls.content}
        onClick={() => {
          setIsModalVisible(true);
          window.scrollTo(0, 0);
        }}
      >
        <div className={cls.mainContent}>
          <div
            className={classNames(
              cls.subject,
              {
                [cls.lectureName]: type === 'lec',
              },
              []
            )}
          >
            {subject}
          </div>
          {teachers.map((teacher) => (
            <div key={teacher.id} className={cls.teacherName}>
              {teacher.name}
            </div>
          ))}
        </div>
        <div className={cls.classRoom}>{teachers[0]?.room}</div>
      </div>
      <ModalTask
        checkboxes={[]}
        lessonId={lessonId}
        date={date}
        subject={subject}
        teachers={teachers}
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
      <span
        ref={refObject}
        onClick={handleClick}
        className={classNames(cls.modalBack, { [cls.modalOpen]: isModalVisible }, [])}
      ></span>
    </>
  );
};

export default UniversityLesson;

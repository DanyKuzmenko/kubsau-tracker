import React, { FC } from 'react';

import { TeacherType } from 'app/types/types';
import cls from './UniversityLesson.module.scss';
import {classNames} from "../../shared/lib/classNames";

interface UniversityLessonProps {
  className?: string;
  type: 'lec' | 'pract' | '';
  teachers: TeacherType[];
  subject: string;
}
const UniversityLesson: FC<UniversityLessonProps> = ({  teachers, subject, type}) => {

  return (
        <div className={cls.content}>
          <div className={cls.mainContent}>
            <div className={classNames(cls.subject, {
                [cls.lectureName]: type === 'lec'
            }, [])}>{subject}</div>
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className={cls.teacherName}>{teacher.name}</div>
            ))}
          </div>
          <div className={cls.classRoom}>{teachers[0]?.room}</div>
        </div>
  );
};

export default UniversityLesson;

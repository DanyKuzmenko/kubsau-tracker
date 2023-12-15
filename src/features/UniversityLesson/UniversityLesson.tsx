import React, { FC } from 'react';

import { TeacherType } from 'app/types/types';
import cls from './UniversityLesson.module.scss';

interface UniversityLessonProps {
  className?: string;
  type: 'lec' | 'pract' | '';
  teachers: TeacherType[];
  start: Date;
  end: Date;
  subject: string;
}
const UniversityLesson: FC<UniversityLessonProps> = ({ start, end, teachers, subject, type}) => {

  return (
        <div className={cls.content}>
          <div>
            <div className={cls.subject}>{subject}</div>
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

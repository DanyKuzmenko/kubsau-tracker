export type TaskType = {
  _id?: string;
  lessonId: string;
  title: string;
  subject: string;
  teachers: TeacherType[];
  isDone: boolean;
  deadline: string;
  description: string;
  checkboxes: CheckboxType[];
};
export type CheckboxType = {
  _id: string;
  title: string;
  isDone: boolean;
};

export type TaskCardType = {
  _id: string;
  date: string;
  tasks: TaskType[];
};

export type ScheduleData = {
  type: string;
  id: string;
  lastRefresh: string;
  currentWeek: number;
  name: string;
  weeks: WeekType[];
};
type WeekType = {
  number: number;
  days: DayType[];
};

type DayType = {
  number: number;
  date: string;
  classes: ClassType[];
};

export type ClassType = {
  number: number;
  start: string;
  finish: string;
  lessons: LessonType[] | [] | null; //Отсутствие лекции в GetByRoom - null | в GetByGroup - []
};

export type LessonType = {
  name: string;
  type: 'lec' | 'pract' | '';
  teachers: TeacherType[];
  _id?: string;
};

export type TeacherType = {
  id: string;
  name: string;
  link: string;
  isOnline: boolean;
  room: string;
  online: string;
};

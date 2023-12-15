export type TaskType = {
  id: string
  title: string
  subject: string
  teacher: string
  isDone: boolean
  deadline: string
  description: string
  checkboxes: CheckboxType[]
}
export type CheckboxType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type TaskCardType = {
  id: string;
  date: string;
  tasks: TaskType[]
}

export type ScheduleData = {
    type: string
    id: string
    lastRefresh: string
    currentWeek: number
    name: string
    weeks: WeekType[]
}
type WeekType = {
    number: number;
    days: DayType[];
}

type DayType = {
    number: number;
    date: string;
    classes: ClassType[]
}

type ClassType = {
    number: number;
    start: string;
    finish: string;
    lessons: LessonType[] | [] | null;  //Отсутствие лекции в GetByRoom - null | в GetByGroup - []
}

type LessonType = {
    name: string;
    type: "lec" | "pract" | "";
    teachers: TeacherType[]
}

type TeacherType = {
    id: string;
    name: string;
    link: string;
    isOnline: boolean;
    room: string;
    online: string
}
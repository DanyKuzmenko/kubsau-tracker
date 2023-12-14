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

export type LessonType = {
    number: number
    subject: string
    group: string
    auditorium: string
    teacher: string
    isLecture: boolean
}
export type ScheduleCardType = {
    id: string;
    date: string;
    lessons: LessonType[];
}



export type TaskType = {
  id: string
  title: string
  subject: string
  teacher: string
  isDone: boolean
  deadline: string
  description: string
  checkboxes:
    {
      id: string,
      title: string,
      isDone: boolean
    }[]
}


export type TaskCardType = {
  id: string;
  date: string;
  tasks: TaskType[]
}


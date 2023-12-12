import { TaskCardType } from './types';

export const TaskCards: TaskCardType[] =[
{
  id: "1",
  date: "2023-12-12T00:00:00.000Z",
  tasks: [
    {
      id: "1",
      title: "Ебануть лабораторочку",
      subject: "Вебчик епта",
      teacher: "Кремер джан",
      isDone: false,
      deadline: "2023-15-12T00:00:00.000z",
      description: "Кремеросик дал лабораторочку, ебашим на здравом",
      checkboxes: [
        {
          id: "1",
          title: "Открыть вебшторм",
          isDone: true
        },
        {
          id: "2",
          title: "Сделать лабораторочку",
          isDone: false
        },
        {
          id: "3",
          title: "Закрыть вебшторм",
          isDone: true
        },
      ]
    }
  ]
}]

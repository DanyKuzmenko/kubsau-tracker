import { ScheduleCardType, TaskCardType } from 'app/types/types';

export const TaskCards: TaskCardType[] = [
  {
    id: '1',
    date: '2023-12-12T00:00:00.000Z',
    tasks: [
      {
        id: '1',
        title: 'Сделать лабораторную работу',
        subject: 'Основы веб-инжиниринга',
        teacher: 'Креймер А.С.',
        isDone: false,
        deadline: '2023-12-12T00:00:00.000Z',
        description: 'Лабораторная работа №1, .htaccess',
        checkboxes: [
          {
            id: '1',
            title: 'Открыть вебшторм',
            isDone: true,
          },
          {
            id: '2',
            title: 'Сделать лабораторочку',
            isDone: false,
          },
          {
            id: '3',
            title: 'Закрыть вебшторм',
            isDone: true,
          },
        ],
      },
    ],
  },
];


export const ScheduleCards: ScheduleCardType[] = [
  {
    id: "1",
    date: "2023-12-12T00:00:00.000Z",
    lessons: [
      {
        number: 1,
        subject: "Основы веб-инжиниринга",
        group: "ИТ2003",
        auditorium: "217гл",
        teacher: "Креймер А.С.",
        isLecture: true
      }
    ]
  }
]

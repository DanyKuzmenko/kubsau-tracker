import { Tasks } from 'pages/Tasks';

export const tasksRoutes = {
  tasks: '/tasks',
};

export const tasksBrowserRoutes = [
  {
    path: tasksRoutes.tasks,
    handle: { pageName: 'Задания' },
    children: [{ index: true, element: <Tasks /> }],
  },
];

import { Schedule } from 'pages/Schedule';

export const scheduleRoutes = {
  schedule: '/',
};

export const scheduleBrowserRoutes = [
  {
    path: scheduleRoutes.schedule,
    handle: { pageName: 'Расписание' },
    children: [{ index: true, element: <Schedule /> }],
  },
];

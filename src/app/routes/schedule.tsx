import Schedule from 'pages/Schedule/Schedule';

export const scheduleRoutes = {
  schedule: '/schedule',
};

export const scheduleBrowserRoutes = [
  {
    path: scheduleRoutes.schedule,
    handle: { pageName: 'Расписание' },
    children: [{ index: true, element: <Schedule /> }],
  },
];

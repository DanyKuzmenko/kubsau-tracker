import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'app/routes/routes';
import { classNames } from 'shared/lib/classNames';

import cls from './SelectedPageLinks.module.scss';

type SelectedLink = 'schedule' | 'tasks';

const SelectedPageLinks: FC = () => {
  const [selectedLink, setSelectedLink] = useState<SelectedLink>('schedule');

  const isScheduleActive = selectedLink === 'schedule';
  const isTasksActive = selectedLink === 'tasks';

  const changeSelectedLinkStatus = (e: React.MouseEvent): void => {
    if ((e.target as HTMLLinkElement).id === 'schedule') {
      setSelectedLink('tasks');
    } else {
      setSelectedLink('schedule');
    }
  };

  return (
    <div className={cls.selectedPageLinks}>
      <Link
        onClick={changeSelectedLinkStatus}
        id={'schedule'}
        to={routes.schedule}
        className={classNames(cls.link, { [cls.active]: isScheduleActive, [cls.inactive]: !isScheduleActive }, [])}
      >
        Расписание
      </Link>
      <Link
        onClick={changeSelectedLinkStatus}
        id={'tasks'}
        to={routes.tasks}
        className={classNames(cls.link, { [cls.active]: isTasksActive, [cls.inactive]: !isTasksActive }, [])}
      >
        Задания
      </Link>
    </div>
  );
};

export { SelectedPageLinks };

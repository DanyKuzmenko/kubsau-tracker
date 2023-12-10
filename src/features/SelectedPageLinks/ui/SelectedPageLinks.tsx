import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'app/routes/routes';
import { classNames } from 'shared/lib/classNames';

import cls from './SelectedPageLinks.module.scss';


export type SelectedLink = 'schedule' | 'tasks';
interface SelectedPageLinksProps {
    selectedPage: SelectedLink
}



const SelectedPageLinks: FC<SelectedPageLinksProps> = ({selectedPage}) => {

  const isScheduleActive = selectedPage === 'schedule';
  const isTasksActive = selectedPage === 'tasks';


  return (
    <div className={cls.selectedPageLinks}>
      <Link
        id={'schedule'}
        to={routes.schedule}
        className={classNames(cls.link, { [cls.active]: isScheduleActive, [cls.inactive]: !isScheduleActive }, [])}
      >
        Расписание
      </Link>
      <Link
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

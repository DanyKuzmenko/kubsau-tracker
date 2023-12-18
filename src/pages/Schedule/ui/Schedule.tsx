import React, {FC, useState} from 'react';

import {Card} from 'widgets/Card';
import {Filters} from 'widgets/Filters';

import cls from './Schedule.module.scss';
import {ScheduleData} from "app/types/types";
import {weeks} from 'features/WeekButtons/ui/WeekButtons';
import {Pages} from "features/SelectedPageLinks/ui/SelectedPageLinks";
import {classNames} from "shared/lib/classNames";

const weekNums = {
    'cur': 0,
    'next': 1
}
const Schedule: FC = () => {
    const [week, setWeek] = useState<weeks>('cur');
    const [searchType, setSearchType] = useState<'groups' | 'rooms'>('groups')
    const [classesInfo, setClassesInfo] = useState<ScheduleData>();


    return (
        <>
            <Filters classesInfo={classesInfo} week={week} setWeek={setWeek} selectedPage={Pages.SCHEDULE}
                     searchType={searchType}
                     setSearchType={setSearchType} setClassesInfo={setClassesInfo}/>

      {classesInfo && <section className={classNames(cls.schedule, {}, [])}>
          {
              classesInfo.weeks[weekNums[week]].days.map((item) => {
                  return <Card key={item.date.toString()} date={new Date(item.date)} classes={item.classes}/>
              })
          }
      </section>

      }

        </>
    );
};

export {Schedule};

import React, { FC, useEffect, useState } from 'react';

import { Card } from 'widgets/Card';
import { Filters } from 'widgets/Filters';

import cls from './Schedule.module.scss';
import {ScheduleData} from "app/types/types";


const Schedule: FC = () => {
  // const [cards, setCards] = useState<ScheduleCardType[]>();
    const [searchType, setSearchType] = useState<'group'|'room'>('group')
    const [groupClasses, setGroupClasses] = useState<ScheduleData>()
    useEffect(() => {
        // axios.get("http://localhost:3000/api/schedule").then(response => {
        //   setCards(response.data)
        // })
        // setCards(ScheduleCards)
    }, []);

  return (
    <>
      <Filters selectedPage={'schedule'} searchType={searchType} setSearchType={setSearchType}/>

        {groupClasses && <section className={cls.schedule}>
            {groupClasses.map((item) => {
                return <Card key={item.date.toString()} date={new Date(item.date)}></Card>;
            })}
        </section>}
    </>
  );
};

export { Schedule };

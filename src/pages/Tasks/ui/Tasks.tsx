import React, {useEffect, useState} from 'react';

import {TaskCardType} from 'app/types/types';
import {TaskCards} from 'fakeApi/fakeApi';
import {classNames} from 'shared/lib/classNames';
import {Card} from 'widgets/Card';
import {Filters} from 'widgets/Filters';

import cls from './Tasks.module.scss';
import {weeks} from 'features/WeekButtons/ui/WeekButtons';
import {Pages} from "../../../features/SelectedPageLinks/ui/SelectedPageLinks";


const Tasks = () => {
    const [cards, setCards] = useState<TaskCardType[]>();
    const [week, setWeek] = useState<weeks>('cur');

    useEffect(() => {
        // axios.get("http://localhost:3000/api/tasks").then(response => {
        //   setCards(response.data)
        // })
        setCards(TaskCards)

    }, []);

    return (
        <>
            <Filters selectedPage={Pages.TASKS} week={week} setWeek={setWeek}/>
            {
                cards && <section className={classNames(cls.tasks, {}, [])}>
                    {cards.map((item) => {
                        return <Card key={item.id} date={new Date(item.date)} tasks={item.tasks}/>
                    })}
              </section>
            }
        </>


    );
};

export {Tasks};

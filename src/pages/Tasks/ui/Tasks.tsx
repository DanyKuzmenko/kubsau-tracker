import React, { useEffect, useRef, useState } from 'react';

import { TaskCardType } from 'app/types/types';
import { TaskCards } from 'fakeApi/fakeApi';
import { classNames } from 'shared/lib/classNames';
import { Card } from 'widgets/Card';
import { Filters } from 'widgets/Filters';

import cls from './Tasks.module.scss';
import { weeks } from 'features/WeekButtons/ui/WeekButtons';


const Tasks = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [cards, setCards] = useState<TaskCardType[]>();
    const refObject = useRef(null);
    const [week, setWeek] = useState<weeks>('cur');
    const handleClick = (evt: React.MouseEvent) => {
        if (evt.target === refObject.current) {
            setIsModalVisible(false)
        }
    }
  useEffect(() => {
    // axios.get("http://localhost:3000/api/tasks").then(response => {
    //   setCards(response.data)
    // })
    setCards(TaskCards)

  }, []);

  return (
      <>
          <Filters selectedPage={'tasks'} week={week} setWeek={setWeek}/>
        {
          cards && <section ref={refObject} onClick={handleClick} className={classNames(cls.tasks,
                {[cls.modalVisible]: isModalVisible}, [])}>
            {cards.map((item) => {
              return <Card isVisible={isModalVisible} setIsVisible={setIsModalVisible}
                           key={item.id} date={new Date(item.date)} tasks={item.tasks}/>
            })}
          </section>
        }
      </>


  );
};

export { Tasks };

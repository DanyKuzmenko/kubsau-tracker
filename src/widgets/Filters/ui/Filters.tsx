import {GroupFilter} from 'features/GroupFilter';
import {SearchInput} from 'features/SearchInput';
import {SelectedPageLinks} from 'features/SelectedPageLinks';
import {Pages} from 'features/SelectedPageLinks/ui/SelectedPageLinks';
import {WeekButtons} from 'features/WeekButtons';

import cls from './Filters.module.scss';
import { weeks } from 'features/WeekButtons/ui/WeekButtons';
import { useState } from 'react';
import {ScheduleData} from "app/types/types";


type Props = {
    selectedPage: Pages;
    setSearchType?: (arg0: 'groups' | 'rooms') => void
    searchType?: 'groups' | 'rooms';
    week: weeks;
    setWeek: (weeks: weeks) => void;
    setClassesInfo?: (ScheduleData: ScheduleData) => void
    classesInfo?: ScheduleData;
};


const Filters = ({selectedPage, searchType, setSearchType, week, setWeek, setClassesInfo, classesInfo}: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
    return (
        <section className={cls.filters}>
            <SelectedPageLinks selectedPage={selectedPage}/>
            <div className={cls.container}>
                <GroupFilter selectedPage={selectedPage} setInputValue={setInputValue} searchType={searchType}
                             setSearchType={setSearchType}/>
                <SearchInput setClassesInfo={setClassesInfo} setInputValue={setInputValue}
                             inputValue={inputValue} searchType={searchType}/>
                <WeekButtons classesInfo={classesInfo} week={week} setWeek={setWeek}/>
            </div>
        </section>
    );
};

export {Filters};

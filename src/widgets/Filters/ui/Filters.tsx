import {GroupFilter} from 'features/GroupFilter';
import {SearchInput} from 'features/SearchInput';
import {SelectedPageLinks} from 'features/SelectedPageLinks';
import {SelectedLink} from 'features/SelectedPageLinks/ui/SelectedPageLinks';
import {WeekButtons} from 'features/WeekButtons';

import cls from './Filters.module.scss';
import { weeks } from 'features/WeekButtons/ui/WeekButtons';
import { useState } from 'react';


type Props = {
    selectedPage: SelectedLink;
    setSearchType?: (arg0: 'groups' | 'rooms') => void
    searchType?: 'groups' | 'rooms';
    week: weeks;
    setWeek: (weeks: weeks) => void;
};
export type ScheduleType = {
  groups: {
    id: string;
    name: string;
  }[]
  rooms: {
    id: string;
    name: string;
  }[]
}

const Filters = ({selectedPage, searchType, setSearchType, week, setWeek}: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
    return (
        <section className={cls.filters}>
            <SelectedPageLinks selectedPage={selectedPage}/>
            <div className={cls.container}>
                <GroupFilter setInputValue={setInputValue} searchType={searchType} setSearchType={setSearchType}/>
                <SearchInput setInputValue={setInputValue} inputValue={inputValue} searchType={searchType}/>
                <WeekButtons week={week} setWeek={setWeek}/>
            </div>
        </section>
    );
};

export {Filters};

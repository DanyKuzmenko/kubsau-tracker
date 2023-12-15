import {GroupFilter} from 'features/GroupFilter';
import {SearchInput} from 'features/SearchInput';
import {SelectedPageLinks} from 'features/SelectedPageLinks';
import {SelectedLink} from 'features/SelectedPageLinks/ui/SelectedPageLinks';
import {WeekButtons} from 'features/WeekButtons';

import cls from './Filters.module.scss';
import {useState} from "react";


type Props = {
    selectedPage: SelectedLink;
    setSearchType: (arg0: 'group' | 'room') => void
    searchType: 'group' | 'room';
};

const Filters = ({selectedPage, searchType, setSearchType}: Props) => {


    return (
        <section className={cls.filters}>
            <SelectedPageLinks selectedPage={selectedPage}/>

            <div className={cls.container}>
                <GroupFilter searchType={searchType} setSearchType={setSearchType}/>
                <SearchInput searchType={searchType}/>
                <WeekButtons/>
            </div>
        </section>
    );
};

export {Filters};

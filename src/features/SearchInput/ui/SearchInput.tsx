import React, { FC, useState } from 'react';


import { getGroupById, getGroups, getRoomById, getRooms } from "app/api/api";
import searchIcon from 'assets/images/searchIcon.svg';
import { AllGroups, AllRooms } from 'fakeApi/fakeApi';
import { Button, ButtonTheme } from 'shared/ui/Button';



import cls from './SearchInput.module.scss';


interface SearchInputProps {
    searchType: string;
    setGroupClasses?:() => void;
    inputValue: string
    setInputValue: (str: string) => void
}
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
const SearchInput: FC<SearchInputProps> = ({ searchType, inputValue, setInputValue}) => {




    const [scheduleData, setScheduleData] =
      useState<ScheduleType>({...AllGroups, ...AllRooms});
    const [suggestions, setSuggestions] = useState<ScheduleType>();
    const filterByName = (nameToFind: string) => {
        if (nameToFind.length <= 2) return scheduleData[searchType].filter(false)
        return scheduleData[searchType].filter(({_, name}) => {
            return name.toLowerCase().includes(nameToFind.toLowerCase());
        })
    }
    const handleInputChange = (e: React.ChangeEvent): void => {

        setInputValue((e.target as HTMLInputElement).value);

        if ((e.target as HTMLInputElement).value.length > 2) {
            const filteredItems = filterByName((e.target as HTMLInputElement).value);
            console.log(filteredItems);

            // if (filteredItems.length === 0) return


            if (searchType === 'groups') {
                // getGroupById(id).then(res => {
                //     // setGroupClasses(res.data)
                // })
                setSuggestions({
                    ...scheduleData,
                    groups: filteredItems,
                    rooms: []
                });

            } else {
                // getRoomById(id).then(res => {
                //     // setRoomClasses(res.data)
                // })
                setSuggestions({
                    ...scheduleData,
                    rooms: filteredItems,
                    groups: []
                });
            }
        } else {
            setSuggestions(null);
        }
    };


    return (
        <>
            <div className={cls.inputContainer}>
                <input
                  className={cls.input}
                  onChange={handleInputChange}
                  value={inputValue}
                  placeholder={searchType === 'rooms' ? 'Искать по аудитории' : 'Искать по группе'} />
                <Button theme={ButtonTheme.PRIMARY} className={cls.button}>
                    <img src={searchIcon} alt={'Поиск.'} />
                </Button>
                {suggestions && <div className={suggestions && cls.suggestions}
                                     style={{height: suggestions[searchType].length * 40 + 'px'}}>
                    {                    suggestions[searchType] && suggestions[searchType].map((item) => {
                        return <div className={cls.suggestionItem} key={item.name}> {item.name} </div>
                    })}
                </div>}


            </div>

        </>


    );
};

export { SearchInput };
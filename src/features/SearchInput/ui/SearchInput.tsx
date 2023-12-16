import React, {FC, useState, KeyboardEvent } from 'react';


import {getGroupById } from "app/api/api";
import searchIcon from 'assets/images/searchIcon.svg';
import {AllGroups, AllRooms} from 'fakeApi/fakeApi';
import {Button, ButtonTheme} from 'shared/ui/Button';


import cls from './SearchInput.module.scss';
import {ScheduleData} from "app/types/types";


interface SearchInputProps {
    searchType: string;
    setGroupClasses?: () => void;
    inputValue: string
    setInputValue: (str: string) => void
    setClassesInfo: (ScheduleData: ScheduleData) => void
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
const SearchInput: FC<SearchInputProps> = ({
                                               searchType, inputValue,
                                               setInputValue, setClassesInfo
                                           }) => {


    const [groupsAndRoomsData, _] =
        useState<ScheduleType>({...AllGroups, ...AllRooms});
    const [suggestions, setSuggestions] = useState<ScheduleType>();
    const filterByName = (nameToFind: string) => {
        if (nameToFind.length <= 2) return groupsAndRoomsData[searchType].filter(false)
        return groupsAndRoomsData[searchType].filter(({_, name}) => {
            return name.toLowerCase().includes(nameToFind.toLowerCase());
        })
    }
    const handleInputChange = (e: React.ChangeEvent): void => {

        setInputValue((e.target as HTMLInputElement).value);

        if ((e.target as HTMLInputElement).value.length > 2) {
            const filteredItems = filterByName((e.target as HTMLInputElement).value);
            if (searchType === 'groups') {
                setSuggestions({
                    ...groupsAndRoomsData,
                    groups: filteredItems,
                    rooms: []
                });

            } else {
                setSuggestions({
                    ...groupsAndRoomsData,
                    rooms: filteredItems,
                    groups: []
                });
            }
        } else {
            setSuggestions(null);
        }
    };
    const handleFocusOut = () => {
        setTimeout(() => {
            setSuggestions(null)
        }, 200)
    }
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    };
    const handleButtonClick = async () => {
        const filtered = groupsAndRoomsData[searchType].filter(({_, name}) => {
            if (searchType === 'rooms') {
                return name === inputValue.toLowerCase();
            } else {
                return name === inputValue.toUpperCase();
            }
        })
        if (filtered.length === 0) {
            setInputValue('')
            console.log(filtered)
            return
        }

        let res: ScheduleData

        if (searchType === 'rooms') {
            res = null
        } else {
            res = await getGroupById(filtered[0].id);
        }

        setClassesInfo(res);
    }


    return (
        <>
            <div className={cls.inputContainer}>
                <input
                    onKeyDown={handleKeyDown}
                    onBlur={handleFocusOut}
                    className={cls.input}
                    onChange={handleInputChange}
                    value={inputValue}
                    placeholder={searchType === 'rooms' ? 'Искать по аудитории' : 'Искать по группе'}/>
                <Button onClick={handleButtonClick} theme={ButtonTheme.PRIMARY} className={cls.button}>
                    <img src={searchIcon} alt={'Поиск.'}/>
                </Button>
                {suggestions && <div className={cls.suggestions}
                                     style={{height: suggestions[searchType].length * 40 + 'px'}}>
                    {suggestions[searchType] && suggestions[searchType].map((item) => {
                        return <div
                            onClick={() => {
                                setSuggestions(null);
                                setInputValue(item.name)
                            }}
                            className={cls.suggestionItem}
                            key={item.name}
                        > {item.name} </div>
                    })}
                </div>}
            </div>

        </>


    );
};

export {SearchInput};
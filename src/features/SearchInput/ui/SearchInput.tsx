import React, {FC, useEffect, useState} from 'react';

import searchIcon from 'assets/images/searchIcon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';

import cls from './SearchInput.module.scss';
import {getGroupById, getGroups, getRoomById, getRooms} from "app/api/api";

interface SearchInputProps {
    searchType: string;
    setGroupClasses?:() => void;
    setRoomClasses?: () => void
}

const SearchInput: FC<SearchInputProps> = ({ searchType}) => {

    type Suggestion = {
        id: string;
        name: string;
    }

    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Suggestion[]>();

    useEffect(() => {
        if (inputValue.length >= 2) {
            if (searchType === 'group') {
                getGroups().then(responseData => {
                    setSuggestions(responseData);
                });
            } else {
                // getRooms().then(responseData => {
                //     setSuggestions(responseData);
                // });
            }
        } else {
            setSuggestions([]);
        }
    }, [inputValue, searchType]);
    const filterByName = (name: string) => {
        return suggestions.filter(({id, name}) => {
            return name === name;
        })[0].id

    }
    const handleInputChange = (e: React.ChangeEvent): void => {
        setInputValue((e.target as HTMLInputElement).value);
        const id = filterByName((e.target as HTMLInputElement).value);
        if (searchType === 'group') {
            getGroupById(id).then(res => {
                // setGroupClasses(res.data)
            })
        } else {
            getRoomById(id).then(res => {
                // setRoomClasses(res.data)
            })
        }
    };


    return (
        <>
            <div className={cls.inputContainer}>
                <input className={cls.input} onChange={handleInputChange} value={inputValue} placeholder={'Поиск'} />
                <Button theme={ButtonTheme.PRIMARY} className={cls.button}>
                    <img src={searchIcon} alt={'Поиск.'} />
                </Button>
            </div>
            <div>
                {suggestions && suggestions.map((item) => {
                    return <div> {item.name} </div>
                })}
            </div>
        </>


    );
    };

export { SearchInput };

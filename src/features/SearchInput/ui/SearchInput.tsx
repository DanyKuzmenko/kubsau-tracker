import React, { FC, KeyboardEvent, useEffect, useState } from 'react';

import { getGroupById, getGroups } from 'app/api/api';
import { ScheduleData } from 'app/types/types';
import searchIcon from 'assets/images/searchIcon.svg';
import { Pages } from 'features/SelectedPageLinks/ui/SelectedPageLinks';
import { Button, ButtonTheme } from 'shared/ui/Button';

import Loader from '../../../shared/ui/Loader/Loader';
import cls from './SearchInput.module.scss';

interface SearchInputProps {
  searchType: string;
  setGroupClasses?: () => void;
  inputValue: string;
  setInputValue: (str: string) => void;
  setClassesInfo: (ScheduleData: ScheduleData) => void;
  selectedPage: Pages;
}

export type GroupType = {
  id: string;
  name: string;
}[];

const SearchInput: FC<SearchInputProps> = ({ searchType, inputValue, setInputValue, setClassesInfo, selectedPage }) => {
  const [groups, setGroups] = useState<GroupType>([]);
  const [suggestions, setSuggestions] = useState<GroupType>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getGroups()
      .then((res: GroupType) => {
        setGroups(res);
      })
      .catch((err: any) => {
        console.log('err', err);
      });
  }, []);

  const filterByName = (nameToFind: string) => {
    return groups.filter(({ id, name }) => name.toLowerCase().includes(nameToFind.toLowerCase()));
  };

  const handleInputChange = (e: React.ChangeEvent): void => {
    const targetValue = (e.target as HTMLInputElement).value;

    setInputValue(targetValue);

    if (targetValue.length > 2) {
      const filteredItems = filterByName(targetValue);
      setSuggestions(filteredItems);
    } else {
      setSuggestions(null);
    }
  };
  const handleFocusOut = () => {
    setTimeout(() => {
      setSuggestions(null);
    }, 200);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleButtonClick();
      setSuggestions(null);
    }
  };
  const handleButtonClick = async () => {
    const filtered = groups.filter(({ id, name }) => name === inputValue.toUpperCase());
    if (filtered.length === 0) {
      setInputValue('');
      return;
    }

    let res: ScheduleData;
    setIsFetching(true);

    res = await getGroupById(filtered[0].id);

    setIsFetching(false);
    setClassesInfo(res);
  };

  return (
    <>
      {selectedPage === Pages.SCHEDULE && (
        <div className={cls.inputContainer}>
          <input
            onKeyDown={handleKeyDown}
            onBlur={handleFocusOut}
            className={cls.input}
            onChange={handleInputChange}
            value={inputValue}
            placeholder={searchType === 'rooms' ? 'Искать по аудитории' : 'Искать по группе'}
          />
          {!isFetching ? (
            <Button onClick={handleButtonClick} theme={ButtonTheme.PRIMARY} className={cls.button}>
              <img src={searchIcon} alt={'Поиск.'} />
            </Button>
          ) : (
            <Button theme={ButtonTheme.PRIMARY} className={cls.button + ' ' + cls.loaderButton}>
              <Loader className={cls.loader} />
            </Button>
          )}
          {suggestions && (
            <div className={cls.suggestions} style={{ height: suggestions.length * 40 + 'px' }}>
              {suggestions.length !== 0 &&
                suggestions.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        setSuggestions(null);
                        setInputValue(item.name);
                      }}
                      className={cls.suggestionItem}
                      key={item.name}
                    >
                      {' '}
                      {item.name}{' '}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export { SearchInput };

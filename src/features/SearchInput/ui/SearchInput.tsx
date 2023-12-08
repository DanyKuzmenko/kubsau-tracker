import React, { useState } from 'react';

import searchIcon from 'assets/images/searchIcon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';

import cls from './SearchInput.module.scss';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent): void => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  return (
    <div className={cls.inputContainer}>
      <input className={cls.input} onChange={handleInputChange} value={inputValue} placeholder={'Поиск'} />
      <Button theme={ButtonTheme.PRIMARY} className={cls.button}>
        <img src={searchIcon} alt={'Поиск.'} />
      </Button>
    </div>
  );
};

export { SearchInput };

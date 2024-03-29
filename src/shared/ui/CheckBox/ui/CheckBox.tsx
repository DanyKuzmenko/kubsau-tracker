import React, { FC } from 'react';

import cls from './CheckBox.module.scss';

interface CheckBoxProps {
  className?: string;
  isDone: boolean;
  disabled?: boolean;
  checked?: boolean
  setIsChecked?: (bool: boolean) => void;
  checkBoxClick?: () => void
}

const CheckBox: FC<CheckBoxProps> = ({ disabled, checked,setIsChecked , checkBoxClick}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    checkBoxClick()

  };
  return (
    <label className={cls.customCheckbox}>
      <input onChange={handleCheckboxChange} checked={checked} disabled={disabled} type="checkbox" />
      <div className={cls.checkbox}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.3332 4L5.99984 11.3333L2.6665 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </label>
  );
};

export { CheckBox };

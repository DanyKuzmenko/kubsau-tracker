import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}
export enum ButtonSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, size, ...otherProps } = props;
  return (
    <button
        className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])}
        {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };

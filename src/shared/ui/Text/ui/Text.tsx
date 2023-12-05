import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Text.module.scss';

export enum TextColor {
  WHITE = 'white'
}

export enum TextSize {
  XS = 'xs',
  S = 's',
  LG = 'lg',
  XL = 'xl'
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  color: TextColor;
  size: TextSize;
}

const Text: FC<TextProps> = ({ className, children, color, size, ...otherProps }) => {
  return (
    <p className={classNames(cls.Button, {}, [className, cls[color], cls[size]])} {...otherProps}>
      {children}
    </p>
  );
};

export { Text };

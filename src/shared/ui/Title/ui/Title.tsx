import { FC, HTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames';
import { TextSize } from 'shared/ui/Text/ui/Text';

import cls from './Title.module.scss';

export enum TitleSize {
  XS = 'xs',
  S = 's',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

interface TitleProps extends HTMLAttributes<HTMLHeadElement> {
  className?: string;
  size: TextSize;
}

const Title: FC<TitleProps> = ({ className, children, size, ...otherProps }) => {
  return (
    <>
      {size === 'xs' ? (
        <h5 className={classNames(cls.xs, {}, [className])} {...otherProps}>
          {children}
        </h5>
      ) : size === 's' ? (
        <h4 className={classNames(cls.s, {}, [className])} {...otherProps}>
          {children}
        </h4>
      ) : size === 'lg' ? (
        <h3 className={classNames(cls.lg, {}, [className])} {...otherProps}>
          {children}
        </h3>
      ) : size === 'xl' ? (
        <h2 className={classNames(cls.xl, {}, [className])} {...otherProps}>
          {children}
        </h2>
      ) : size === 'xxl' ? (
        <h1 className={classNames(cls.xxl, {}, [className])} {...otherProps}>
          {children}
        </h1>
      ) : (
        ''
      )}
    </>
  );
};

export { Title };

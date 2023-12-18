import React, {FC} from 'react';
import { classNames } from 'shared/lib/classNames';
import { ReactComponent as MySvg } from 'assets/images/loader.svg'
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader:FC<LoaderProps> = ({className}) => {
 return (
  <div className={classNames(cls.Loader, {}, [className])}>
    <MySvg/>
  </div>
 );
};

export default Loader;
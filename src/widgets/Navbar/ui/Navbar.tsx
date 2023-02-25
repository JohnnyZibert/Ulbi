import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

export interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        /
    </div>
);

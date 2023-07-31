import { FC } from 'react'
import cls from './Menu.module.scss'
import { classNames } from '../classNames/classNames';
import { AppLink, AppLinkTheme } from '../AppLink/AppLink';

interface MenuProps {
    className?: string;
    burger: boolean;
    burgerFn: any;
}
const HeaderLinks = [
    { id: 1, text: 'How it works', link: '/#cont1' },
    { id: 2, text: 'About', link: '/about' },
    { id: 3, text: 'Blog', link: '/blog#start' },
]

export const Menu: FC<MenuProps> = ({ className, burger, burgerFn }) => {
    return (
        <div className={classNames(cls.Menu, { [cls.collapsed]: burger }, [className])}>
            {HeaderLinks.map((l) => {
                return <AppLink
                    onClick={()=>burgerFn(!burger)}
                    theme={AppLinkTheme.MENU}
                    className={cls.MenuLink}
                    key={l.id} to={l.link}
                >{l.text}</AppLink>
            })}
        </div>
    )
}
import { FC, useState } from 'react'
import cls from './Header.module.scss'
import { Button, ThemeButton } from '../Button/Button'
import { Menu } from './Menu'
import { classNames } from '../classNames/classNames'
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { AppLink } from '../AppLink/AppLink'


export const Header: FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <header className={cls.headerContainer}>
            <div className={cls.Header}>
                <AppLink to={'/#start'} className={cls.Logo}><Logo /></AppLink>
                <Menu burger={collapsed} burgerFn={setCollapsed} />
                <div className={cls.HeaderBtn}>
                    <AppLink to={'/#calendar'}><Button theme={ThemeButton.CLEAR} >Login</Button></AppLink>
                    <AppLink to={'/#calendar'}><Button theme={ThemeButton.OUTLINE} >Sign up</Button></AppLink>
                </div>
                <div
                    onClick={() => setCollapsed(!collapsed)}
                    className={classNames(cls.burger, { [cls.open]: collapsed }, [])}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </header>
    )
}
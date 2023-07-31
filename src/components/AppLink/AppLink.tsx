import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from '../classNames/classNames';
import { HashLink } from 'react-router-hash-link';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    MENU = 'MenuLink'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <HashLink
            smooth
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </HashLink>
    );
};
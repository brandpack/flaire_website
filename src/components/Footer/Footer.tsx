import { FC } from 'react'
import cls from './Footer.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as Logo } from '../../assets/mark.svg';
import { ReactComponent as Mark } from '../../assets/sign.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Line } from '../../assets/line.svg';


import { AppLink, AppLinkTheme } from '../AppLink/AppLink';

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer id='Footer' className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.Information}>
                <AppLink to={'/'} ><Logo className={cls.Mark} /></AppLink>
                <div className={cls.LinksContainer}>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Product</h1>
                        <AppLink to={'/'}>Login</AppLink>
                        <AppLink to={'/#calendar'}>Get Started</AppLink>
                    </div>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Company</h1>
                        <AppLink to={'/'}>About</AppLink>
                    </div>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Info</h1>
                        <AppLink to={'/'}>Send a message</AppLink>
                        <AppLink to={'/tos#start'}>Terms of Service</AppLink>
                    </div>
                </div>
            </div>
            <div className={cls.Undercard}>
                <div className={cls.row}>
                    <p className={cls.UndercardTextFirst}>
                        Ditch the spreadsheets, the back and forth emails, and <br />
                        disconnected tools. Use Flaire instead - so you can spend more <br />
                        time growing the brands we love.
                    </p>
                </div>
                <hr />
                <div className={cls.Grid}>
                    <div className={cls.Sign}>
                        <Mark />
                        <p className={cls.Copyright}>
                            Flaire Software, Inc.<br />
                            Copyright 2023 © All rights reserved
                        </p>
                    </div>

                    <p className={cls.UndercardText}>
                        <AppLink target='_blank' to={'https://brandpack.me/'}>
                            Designed by brandpack
                        </AppLink>
                    </p>
                    <div className={cls.socials} >
                        <Line />
                        <AppLink
                            to={'https://www.linkedin.com/company/flaire-software'}
                            theme={AppLinkTheme.PRIMARY}
                            target='_blank'
                        >
                            <LinkedIn />
                        </AppLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}
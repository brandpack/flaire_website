import { FC } from 'react'
import cls from './Footer.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as Logo } from '../../assets/mark.svg';
import { ReactComponent as LogoW } from '../../assets/markW.svg';
import { ReactComponent as Mark } from '../../assets/sign.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as LinkedInW } from '../../assets/linkedinW.svg';
import { ReactComponent as Line } from '../../assets/line.svg';
import { ReactComponent as LineW } from '../../assets/lineW.svg';


import { AppLink, AppLinkTheme } from '../AppLink/AppLink';
import { useTheme } from '../ThemeChanger/lib/UseTheme';
import { Theme } from '../ThemeChanger/lib/ThemeContext';

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
    const { theme } = useTheme();
    return (
        <footer id='Footer' className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.Information}>
                {theme === Theme.DARK ?
                    <AppLink to={'/'} ><Logo className={cls.Mark} /></AppLink>

                    :
                    <AppLink to={'/'} ><LogoW className={cls.Mark} /></AppLink>
                }
                <div className={cls.LinksContainer}>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Product</h1>
                        <AppLink to={'/'}>Login</AppLink>
                        <AppLink to={'/#calendar'}>Get Started</AppLink>
                    </div>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Company</h1>
                        <AppLink to={'/about#start1'}>About</AppLink>
                        <AppLink to={'/blog#start2'}>Blog</AppLink>
                    </div>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Info</h1>
                        <AppLink to={'/'}>Send a message</AppLink>
                        <AppLink to={'/tos#start3'}>Terms of Service</AppLink>
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
                    {theme === Theme.DARK ?

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
                        :
                        <div className={cls.socials} >
                            <LineW />
                            <AppLink
                                to={'https://www.linkedin.com/company/flaire-software'}
                                theme={AppLinkTheme.PRIMARY}
                                target='_blank'
                            >
                                <LinkedInW />
                            </AppLink>
                        </div>
                    }

                </div>
            </div>
        </footer>
    )
}
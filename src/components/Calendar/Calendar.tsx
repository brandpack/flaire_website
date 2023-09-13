import { FC } from 'react'
import cls from './Calendar.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as Logo } from '../../assets/calend-logo.svg';
import { ReactComponent as LogoW } from '../../assets/calend-logoW.svg';
import { InlineWidget } from "react-calendly";
import { useTheme } from '../ThemeChanger/lib/UseTheme';
import { Theme } from '../ThemeChanger/lib/ThemeContext';
interface CalendarProps {
    className?: string;
}

export const Calendar: FC<CalendarProps> = ({ className }) => {
    const { theme } = useTheme();
    return (
        <div id='calendar' className={classNames(cls.Calendar, {}, [className])}>
            <div className={cls.block}>
                <div className={cls.Hear}>
                    <div className={cls.HearMain}>
                        <h1>
                            Schedule time
                            to learn more
                            about Flaire
                        </h1>
                        <p>
                            We&apos;ll make it easy for you. Just pick a
                            date that works for you and we’ll send
                            the invite right to your calendar.
                        </p>
                    </div>

                    <div className={cls.HearFooter}>
                        {theme === Theme.DARK ?
                            <Logo />
                            :
                            <LogoW />
                        }
                        <div className={cls.line}></div>
                    </div>
                </div>
                <div className={cls.FormBlock}>
                    {theme === Theme.DARK ?
                        <InlineWidget
                            // eslint-disable-next-line max-len
                            url="https://calendly.com/reenasudan/intro-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1e3e&text_color=dedede&primary_color=b7c08e"
                            styles={{ minHeight: '100%', minWidth: '320px', borderRadius: '0px 30px 30px 0px' }}
                        />
                        :
                        <InlineWidget
                            // eslint-disable-next-line max-len
                            url="https://calendly.com/reenasudan/intro-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=E7E7F4&text_color=0A0819&primary_color=C6E04C"
                            styles={{ minHeight: '100%', minWidth: '320px', borderRadius: '0px 30px 30px 0px' }}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
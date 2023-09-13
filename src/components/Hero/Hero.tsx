import { FC, useEffect, useRef } from 'react'
import cls from './Hero.module.scss'
import { classNames } from '../classNames/classNames';
import HeroBgImg from '../../assets/bg.webp';
import HeroBgImgM from '../../assets/BgImgM.webp';
import Safari from '../../assets/DashbordSafari.webp';
import HeroBgImgW from '../../assets/bgW.webp';
import HeroBgImgMW from '../../assets/BgImgMW.webp';
import SafariW from '../../assets/DashbordSafariW.webp';

import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as File } from '../../assets/file.svg';
import { ReactComponent as Contact } from '../../assets/contact.svg';
import { ReactComponent as Analytics } from '../../assets/analytics.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Dollar } from '../../assets/dollar.svg';
import { ReactComponent as Photo } from '../../assets/photo.svg';
import { ReactComponent as Chart } from '../../assets/chart.svg';
// White
import { ReactComponent as MailW } from '../../assets/mailW.svg';
import { ReactComponent as FileW } from '../../assets/fileW.svg';
import { ReactComponent as ContactW } from '../../assets/contactW.svg';
import { ReactComponent as AnalyticsW } from '../../assets/analyticsW.svg';
import { ReactComponent as CalendarW } from '../../assets/calendarW.svg';
import { ReactComponent as DollarW } from '../../assets/dollarW.svg';
import { ReactComponent as PhotoW } from '../../assets/photoW.svg';
import { ReactComponent as ChartW } from '../../assets/chartW.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Power0, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';
import { useTheme } from '../ThemeChanger/lib/UseTheme';
import { Theme } from '../ThemeChanger/lib/ThemeContext';



interface HeroProps {
    className?: string;

}
export const Hero: FC<HeroProps> = ({ className }) => {
    const { theme } = useTheme();
    const MailAnim = useRef(null);
    const FileAnim = useRef(null);
    const ContactAnim = useRef(null);
    const AnalyticsAnim = useRef(null);
    const CalendarAnim = useRef(null);
    const DollarAnim = useRef(null);
    const PhotoAnim = useRef(null);
    const ChartAnim = useRef(null);
    const TextAnim = useRef(null);
    const imgAnim = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to([MailAnim.current, FileAnim.current, ContactAnim.current, AnalyticsAnim.current], {
            x: -1000,
            y: -1000,
            opacity: 0,
            scale: 5,
            scrollTrigger: {
                start: "top",
                end: "bottom",
                scrub: true,
                // markers: true,
            },
            ease: Power0.easeInOut
        });
        gsap.to([CalendarAnim.current, DollarAnim.current, PhotoAnim.current, ChartAnim.current], {
            x: 1000,
            y: -1000,
            opacity: 0,
            scale: 5,
            scrollTrigger: {
                start: "top",
                end: "bottom",
                scrub: true,
                // markers: true,
            },
            ease: Power0.easeInOut
        });
        gsap.to(TextAnim.current, {
            y: -1000,
            opacity: 0,
            scrollTrigger: {
                start: "top",
                end: "bottom",
                scrub: true,
                // markers: true,
            },
            ease: Power0.easeInOut
        });
        gsap.to(imgAnim.current, {
            y: -100,
            scrollTrigger: {
                start: "top",
                end: "bottom",
                scrub: true,
                // markers: true,
            },
            ease: Power0.easeInOut
        });

    }, [])
    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <div ref={TextAnim} className={cls.HeroInformation}>
                <div className={cls.HeroText}>
                    <h1>
                        Fashion’s most <br />
                        intelligent & intuitive <br />
                        workflow platform
                    </h1>
                    <p>
                        Centralize your data, streamline your
                        operations, and grow your business
                        efficiently and profitably.
                    </p>
                </div>
                <HashLink className={cls.Button} smooth to={'/#calendar'} >GET STARTED</HashLink>
            </div>
            {theme === Theme.DARK ?
                <>
                    <LazyLoadImage className={cls.img} src={HeroBgImg} alt="HeroBgImg" />
                    <LazyLoadImage className={cls.imgM} src={HeroBgImgM} alt="HeroBgImgM" />
                    <span >
                        <img className={cls.Safari} src={Safari} alt="Safari showcase" />
                    </span>
                </>
                :
                <>
                    <LazyLoadImage className={cls.img} src={HeroBgImgW} alt="HeroBgImg" />
                    <LazyLoadImage className={cls.imgM} src={HeroBgImgMW} alt="HeroBgImgM" />
                    <span >
                        <img className={cls.Safari} src={SafariW} alt="Safari showcase" />
                    </span>
                </>
            }
            {theme === Theme.DARK ?
                <>
                    <span ref={MailAnim} className={cls.Mail}><Mail /></span>
                    <span ref={FileAnim} className={cls.File}><File /></span>
                    <span ref={ContactAnim} className={cls.Contact}><Contact /></span>
                    <span ref={AnalyticsAnim} className={cls.Analytics} ><Analytics /></span>
                    <span ref={CalendarAnim} className={cls.Calendar}><Calendar /></span>
                    <span ref={DollarAnim} className={cls.Dollar}><Dollar /></span>
                    <span ref={PhotoAnim} className={cls.Photo}><Photo /></span>
                    <span ref={ChartAnim} className={cls.Chart}><Chart /></span>
                </>
                :
                <>
                    <span ref={MailAnim} className={cls.Mail}><MailW /></span>
                    <span ref={FileAnim} className={cls.File}><FileW /></span>
                    <span ref={ContactAnim} className={cls.Contact}><ContactW /></span>
                    <span ref={AnalyticsAnim} className={cls.Analytics} ><AnalyticsW /></span>
                    <span ref={CalendarAnim} className={cls.Calendar}><CalendarW /></span>
                    <span ref={DollarAnim} className={cls.Dollar}><DollarW /></span>
                    <span ref={PhotoAnim} className={cls.Photo}><PhotoW /></span>
                    <span ref={ChartAnim} className={cls.Chart}><ChartW /></span>
                </>
            }
        </div>
    )
}
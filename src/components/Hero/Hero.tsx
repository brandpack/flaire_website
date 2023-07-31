import { FC, useEffect, useRef } from 'react'
import cls from './Hero.module.scss'
import { classNames } from '../classNames/classNames';
import HeroBgImg from '../../assets/Test.jpg';
import HeroBgImgM from '../../assets/mobile illustration.jpg';
import { ReactComponent as Safari } from '../../assets/dashbord-safari.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as File } from '../../assets/file.svg';
import { ReactComponent as Contact } from '../../assets/contact.svg';
import { ReactComponent as Analytics } from '../../assets/analytics.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Dollar } from '../../assets/dollar.svg';
import { ReactComponent as Photo } from '../../assets/photo.svg';
import { ReactComponent as Chart } from '../../assets/chart.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Power0, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';


interface HeroProps {
    className?: string;
}
gsap.registerPlugin(ScrollTrigger);
export const Hero: FC<HeroProps> = ({ className }) => {
    const MailAnim = useRef(null);
    const FileAnim = useRef(null);
    const ContactAnim = useRef(null);
    const AnalyticsAnim = useRef(null);
    const CalendarAnim = useRef(null);
    const DollarAnim = useRef(null);
    const PhotoAnim = useRef(null);
    const ChartAnim = useRef(null);
    const TextAnim = useRef(null);
    useEffect(() => {
        gsap.to([MailAnim.current,FileAnim.current,ContactAnim.current,AnalyticsAnim.current], {
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
        gsap.to([CalendarAnim.current,DollarAnim.current,PhotoAnim.current,ChartAnim.current], {
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
        
    }, [])
    return (
        <div  className={classNames(cls.Hero, {}, [className])}>
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
            <LazyLoadImage className={cls.img} src={HeroBgImg} alt="HeroBgImg" />
            <LazyLoadImage className={cls.imgM} src={HeroBgImgM} alt="HeroBgImgM" />
            <Safari className={cls.Safari} />
            <span ref={MailAnim} className={cls.Mail}><Mail /></span>
            <span ref={FileAnim} className={cls.File}><File  /></span>
            <span ref={ContactAnim} className={cls.Contact}><Contact  /></span>
            <span ref={AnalyticsAnim} className={cls.Analytics} ><Analytics  /></span>
            <span ref={CalendarAnim} className={cls.Calendar}><Calendar  /></span>
            <span ref={DollarAnim} className={cls.Dollar}><Dollar  /></span>
            <span ref={PhotoAnim} className={cls.Photo}><Photo  /></span>
            <span ref={ChartAnim} className={cls.Chart}><Chart  /></span>
            
        </div>
    )
}
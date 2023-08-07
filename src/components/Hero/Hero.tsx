import { FC, useEffect, useRef } from 'react'
import cls from './Hero.module.scss'
import { classNames } from '../classNames/classNames';
import HeroBgImg from '../../assets/bg.webp';
import HeroBgImgM from '../../assets/BgImgM.webp';
import Safari from '../../assets/DashbordSafari.webp';

import { ReactComponent as Mail } from '../../assets/Mail.svg';
import { ReactComponent as File } from '../../assets/File.svg';
import { ReactComponent as Contact } from '../../assets/Contact.svg';
import { ReactComponent as Analytics } from '../../assets/Analytics.svg';
import { ReactComponent as Calendar } from '../../assets/Calendar.svg';
import { ReactComponent as Dollar } from '../../assets/Dollar.svg';
import { ReactComponent as Photo } from '../../assets/Photo.svg';
import { ReactComponent as Chart } from '../../assets/Chart.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Power0, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';


interface HeroProps {
    className?: string;
    
}
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
    const imgAnim = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // gsap.fromTo(HeroAnim.current, {
        //     y: 100,
        //     opacity: 0,
        //     // zIndex: 3,
        //     ease: Power0.easeInOut,
        //     duration: 0.5
        // },
        // {
        //     y: 0,
        //     opacity: 1,
        //     ease: Power0.easeInOut,
        //     duration: 0.8
        // });
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
            <LazyLoadImage className={cls.img} src={HeroBgImg} alt="HeroBgImg" />
            <img className={cls.imgM} src={HeroBgImgM} alt="HeroBgImgM" />
            <span ref={imgAnim}>
                <LazyLoadImage  className={cls.Safari} src={Safari} alt="HeroBgImgM" />
            </span>
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
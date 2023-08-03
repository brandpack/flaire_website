import { FC, useEffect, useRef } from 'react'
import cls from './ThirdContent.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as BestSellser } from '../../assets/best-sellers.svg';
import { ReactComponent as Calendar } from '../../assets/Calendar2.svg';
import { ReactComponent as FutureCash } from '../../assets/FutureCash.svg';
import { ReactComponent as Sales } from '../../assets/Sales.svg';
import { Power0, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ThirdContentProps {
    className?: string;
}
gsap.registerPlugin(ScrollTrigger);
export const ThirdContent: FC<ThirdContentProps> = ({ className }) => {
    const ContentAnim = useRef(null);
    const isMobile = window.innerWidth <= 825;
    useEffect(() => {
        // Получаем ссылку на блок, который будем анимировать
        const block = ContentAnim.current;

        // Инициализируем анимацию с помощью GSAP
        if (!isMobile) {
            gsap.fromTo(block, {
                y: 100, // Поднимаем блок на 100px
                opacity: 0, // Можно добавить анимацию прозрачности
                duration: 0.4, // Длительность анимации
                ease: Power0.easeInOut,
                scrollTrigger: {
                    trigger: block, // Блок, который будет служить триггером для анимации
                    start: 'top 80%', // Начинаем анимацию, когда верх блока находится на 80% от верха окна
                    end: 'bottom 80%', // Заканчиваем анимацию, когда нижняя граница блока находится на 20% от верха окна
                    scrub: 1, // Значение 1 означает, что анимация будет происходить на всем протяжении скролла
                },
            },
            {
                y: 0, // Поднимаем блок на 100px
                opacity: 1, // Можно добавить анимацию прозрачности
                duration: 0.4, // Длительность анимации
                ease: Power0.easeInOut,
                scrollTrigger: {
                    trigger: block, // Блок, который будет служить триггером для анимации
                    start: 'top 80%', // Начинаем анимацию, когда верх блока находится на 80% от верха окна
                    end: 'bottom 40%', // Заканчиваем анимацию, когда нижняя граница блока находится на 20% от верха окна
                    scrub: 1, // Значение 1 означает, что анимация будет происходить на всем протяжении скролла
                },
            });
        }

    }, []);
    return (
        <div className={classNames(cls.ThirdContent, {}, [className])}>
            <div className={cls.ContentImg}>
                <div className={cls.MainForm}>
                    <BestSellser className={cls.BestSellser} />
                    <Calendar className={cls.Calendar} />
                    <FutureCash className={cls.FutureCash} />
                    <Sales className={cls.Sales} />
                </div>

            </div>
            <div ref={ContentAnim} className={cls.ContentBlockText}>
                <h1 className={cls.ContentHeader}>
                    Centralize data and use AI to make faster, more informed decisions
                </h1>
                <p className={cls.ContentText} >
                    Harness the power of your own data to surface key insights and
                    trends to make smarter decisions and know when to take
                    action.
                </p>
                <p className={cls.ContentText} >
                    Enhance cross-functional collaboration, reduce errors, and free
                    up time to focus on growing your business.
                </p>
            </div>

        </div>
    )
}
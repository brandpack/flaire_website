import { FC, useEffect, useRef } from 'react'
import cls from './Help.module.scss'
import { classNames } from '../classNames/classNames';
import { Power0, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HelpProps {
    className?: string;
}

gsap.registerPlugin(ScrollTrigger);
export const Help: FC<HelpProps> = ({ className }) => {
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
                    end: 'center', // Заканчиваем анимацию, когда нижняя граница блока находится на 20% от верха окна
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
                    end: 'center', // Заканчиваем анимацию, когда нижняя граница блока находится на 20% от верха окна
                    scrub: 1, // Значение 1 означает, что анимация будет происходить на всем протяжении скролла
                },
            });
        }

    }, []);
    return (
        <div ref={ContentAnim} className={classNames(cls.Help, {}, [className])}>
            <h1>How we can help your brand</h1>
            <p>
                Unify your data and streamline manual processes - so you can spend 
                less time stressing and more time growing the brands we love

            </p>
        </div>
    )
}
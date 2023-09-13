import { FC, useEffect, useRef } from 'react'
import cls from './Content.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as Alert } from '../../assets/Alert.svg';
import { ReactComponent as ButtonPurchase } from '../../assets/ButtonPurchase.svg';
import { ReactComponent as List } from '../../assets/List.svg';
import { ReactComponent as Map } from '../../assets/Map.svg';
import { ReactComponent as PointerLine } from '../../assets/pointerLine.svg';
import { ReactComponent as SideBar } from '../../assets/SideBar.svg';
//White
import { ReactComponent as AlertW } from '../../assets/AlertW.svg';
import { ReactComponent as ButtonPurchaseW } from '../../assets/ButtonPuchaseW.svg';
import { ReactComponent as ListW } from '../../assets/ListW.svg';
import { ReactComponent as MapW } from '../../assets/MapW.svg';
import { ReactComponent as PointerLineW } from '../../assets/pointerLineW.svg';
import { ReactComponent as SideBarW } from '../../assets/SideBarW.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power0, gsap } from 'gsap';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useTheme } from '../ThemeChanger/lib/UseTheme';
import { Theme } from '../ThemeChanger/lib/ThemeContext';
interface ContentProps {
    className?: string;
}

gsap.registerPlugin(ScrollTrigger);
export const Content: FC<ContentProps> = ({ className }) => {
    const ContentAnim = useRef(null);
    const { theme } = useTheme();
    const isMobile = window.innerWidth <= 825;
    useEffect(() => {
        // Получаем ссылку на блок, который будем анимировать
        const block = ContentAnim.current;

        // Инициализируем анимацию с помощью GSAP
        if (!isMobile) {
            gsap.fromTo(block, {
                y: 50, // Поднимаем блок на 100px
                opacity: 0, // Можно добавить анимацию прозрачности
                duration: 0.4, // Длительность анимации
                ease: Power0.easeInOut,
                scrollTrigger: {
                    trigger: block, // Блок, который будет служить триггером для анимации
                    start: 'top 80%', // Начинаем анимацию, когда верх блока находится на 80% от верха окна
                    end: 'top', // Заканчиваем анимацию, когда нижняя граница блока находится на 20% от верха окна
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
                    end: 'top', // Заканчиваем анимацию, когда нижняя граница блока находится на 20% от верха окна
                    scrub: 1, // Значение 1 означает, что анимация будет происходить на всем протяжении скролла
                },
            });
        }

    }, []);
    return (
        <div className={classNames(cls.Content, {}, [className])}>
            <div ref={ContentAnim} className={cls.ContentBlockText}>
                <h1 className={cls.ContentHeader}>
                    Gain real-time visibility
                    into every step of your
                    supply chain
                </h1>
                <p className={cls.ContentText} >
                    Easily manage SKUs, customer orders, and POs in a 
                    single system — no more shuffling between emails,
                    spreadsheets, and other disjointed tools.
                </p>
                <p className={cls.ContentText} >
                    Track important milestones in real-time, get notified about
                    changes or potential delays, ensure all relevant parties are kept
                    up-to-date, and use activity streams for accountability.
                </p>
            </div>
            {theme === Theme.DARK ?
                <LazyLoadComponent>
                    <div className={cls.ContentImg}>
                        <div className={cls.MainForm}>
                            <Map className={cls.Map} />
                            <SideBar className={cls.SideBar} />
                            <List className={cls.List} />
                            <PointerLine className={cls.PointerLine} />
                            <Alert className={cls.Alert} />
                            <ButtonPurchase className={cls.ButtonPurchase} />
                        </div>
                    </div>
                </LazyLoadComponent>
                :
                <LazyLoadComponent>
                    <div className={cls.ContentImg}>
                        <div className={cls.MainForm}>
                            <MapW className={cls.Map} />
                            <SideBarW className={cls.SideBar} />
                            <ListW className={cls.List} />
                            <PointerLineW className={cls.PointerLine} />
                            <AlertW className={cls.Alert} />
                            <ButtonPurchaseW className={cls.ButtonPurchase} />
                        </div>
                    </div>
                </LazyLoadComponent>
            }


        </div>
    )
}
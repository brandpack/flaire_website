import { FC, useEffect, useRef } from 'react'
import cls from './FirstContent.module.scss'
import { ReactComponent as AutoEmail } from '../../assets/AutoMail.svg';
import { ReactComponent as Chats } from '../../assets/Chats.svg';
import { ReactComponent as MailForm } from '../../assets/mailWrite.svg';
import { ReactComponent as Files } from '../../assets/Files.svg';
import { classNames } from '../classNames/classNames';
import { Power0, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

interface FirstContentProps {
    className?: string;
}

gsap.registerPlugin(ScrollTrigger);
export const FirstContent: FC<FirstContentProps> = ({ className }) => {
    const ContentAnim = useRef(null);
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
        <div id='cont1' className={classNames(cls.FirstContent, {}, [className])}>
            <LazyLoadComponent>
                <div className={cls.ContentImg}>

                    <div className={cls.MainForm}>
                        <Chats className={cls.Chats} />
                        <MailForm className={cls.MailForm} />
                        <Files className={cls.Files} />
                        <AutoEmail className={cls.AutoEmail} />
                    </div>

                </div>
            </LazyLoadComponent>

            <div ref={ContentAnim} className={cls.ContentBlockText}>
                <h1 className={cls.ContentHeader}>
                    Centralize and streamline all of your communication
                </h1>
                <div className={cls.custom}>
                    <div className={cls.Suppliers}>suppliers</div>
                    <div className={cls.Factories}>factories</div>
                    <div className={cls.Customers}>customers</div>
                </div>
                <p className={cls.ContentText} >
                    Automate sending personalized customer outreach.
                    Gather critical information from suppliers and factories faster.
                    Easily share documents and send requests to external stakeholders.
                    All from one place.
                </p>
                <p className={cls.ContentText} >
                    All documents, images, and messages are automatically
                    saved to the corresponding order so nothing falls through the cracks.
                </p>
            </div>

        </div>
    )
}
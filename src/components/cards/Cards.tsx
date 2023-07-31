import { FC } from 'react'
import cls from './Cards.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as Source } from '../../assets/Source.svg';
import { ReactComponent as Purpose } from '../../assets/purpose.svg';
import { ReactComponent as Focused } from '../../assets/focused.svg';
import { ReactComponent as UX } from '../../assets/UX.svg';
import { ReactComponent as AI } from '../../assets/AI.svg';
import { ReactComponent as Support } from '../../assets/Support.svg';
import { ReactComponent as Flexible } from '../../assets/Flexible.svg';
import { ReactComponent as Scalable } from '../../assets/Scalable.svg';
interface CardsProps {
    className?: string;
}

export const Cards: FC<CardsProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Cards, {}, [className])}>

            <div className={cls.card}>
                <Source />
                <div className={cls.cardText}>
                    <h4>Single Source of Truth</h4>
                    <p>Eliminate data silos and centralize
                        all your mission-critical data in one
                        place.
                    </p>
                </div>
            </div>
            <div className={cls.card}>
                <Purpose />
                <div className={cls.cardText}>
                    <h4>Purpose-Built</h4>
                    <p>Reduce manual processes with
                        software built to address the unique
                        challenges facing today’s fashion
                        companies.
                    </p>
                </div>
            </div>
            <div className={cls.card}>
                <Focused />
                <div className={cls.cardText}>
                    <h4>Workflow Focused</h4>
                    <p>Ditch the spreadsheets and 
                        disjointed tools. Our features are
                        designed to enable and support your
                        workflows end-to-end.
                    </p>
                </div>
            </div>
            <div className={cls.card}>
                <UX />
                <div className={cls.cardText}>
                    <h4>Intuitive User Experience</h4>
                    <p>Modern and simple, so you can run
                        your business more efficiently and
                        profitably on day one. </p>
                </div>
            </div>
            <hr />
            <div className={cls.card}>
                <AI />
                <div className={cls.cardText}>
                    <h4>AI-powered</h4>
                    <p>Leverage automation, embedded AI,
                        and data-driven insights to help your 
                        team work smarter.
                    </p>
                </div>
            </div>
            <div className={cls.card}>
                <Support />
                <div className={cls.cardText}>
                    <h4>Dedicated Support </h4>
                    <p>We partner with you to provide
                        personalized support and ensure
                        you get the most out of our
                        software.
                    </p>
                </div>
            </div>
            <div className={cls.card}>
                <Flexible />
                <div className={cls.cardText}>
                    <h4>Flexible & Adaptable</h4>
                    <p>Our modular and composable 
                        system is adaptable, so you only pay 
                        for what you need.
                    </p>
                </div>
            </div>
            <div className={cls.card}>
                <Scalable />
                <div className={cls.cardText}>
                    <h4>Scalable</h4>
                    <p>Our foundational platform is built to
                        scale with you as your business
                        grows.
                    </p>
                </div>
            </div>

        </div>
    )
}
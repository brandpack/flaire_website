import { FC } from 'react'
import cls from './Content.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as Alert } from '../../assets/Alert.svg';
import { ReactComponent as ButtonPurchase } from '../../assets/ButtonPurchase.svg';
import { ReactComponent as List } from '../../assets/List.svg';
import { ReactComponent as Map } from '../../assets/Map.svg';
import { ReactComponent as PointerLine } from '../../assets/pointerLine.svg';
import { ReactComponent as SideBar } from '../../assets/SideBar.svg';
interface ContentProps {
    className?: string;
}
export const Content: FC<ContentProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Content, {}, [className])}>
            <div className={cls.ContentBlockText}>
                <h1 className={cls.ContentHeader}>
                    Gain real-time visibility
                    into every step of your
                    supply chain
                </h1>
                <p className={cls.ContentText} >
                    Easily manage products, orders and POs in a single
                    system — no more shuffling between emails,
                    spreadsheets, and other disjointed tools.
                </p>
                <p className={cls.ContentText} >
                    Track important milestones in real-time, get notified about
                    changes or potential delays, ensure all relevant parties are kept
                    up-to-date, and use activity streams for accountability.
                </p>
            </div>
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
        </div>
    )
}
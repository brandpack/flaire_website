import { FC } from 'react'
import cls from './ThirdContent.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as BestSellser } from '../../assets/best-sellers.svg';
import { ReactComponent as Calendar } from '../../assets/Calendar2.svg';
import { ReactComponent as FutureCash } from '../../assets/FutureCash.svg';
import { ReactComponent as Sales } from '../../assets/Sales.svg';

interface ThirdContentProps {
    className?: string;
}

export const ThirdContent: FC<ThirdContentProps> = ({ className }) => {
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
            <div className={cls.ContentBlockText}>
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
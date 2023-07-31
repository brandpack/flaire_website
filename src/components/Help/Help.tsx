import { FC } from 'react'
import cls from './Help.module.scss'
import { classNames } from '../classNames/classNames';

interface HelpProps {
    className?: string;
}

export const Help: FC<HelpProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Help, {}, [className])}>
            <h1>How we can help your brand</h1>
            <p>
                Unify your data and streamline manual processes - so you can spend 
                less time stressing and more time growing the brands we love

            </p>
        </div>
    )
}
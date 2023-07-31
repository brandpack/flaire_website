import { FC } from 'react'
import { classNames } from '../components/classNames/classNames';
import { Hero } from '../components/Hero/Hero';
import { Cards } from '../components/cards/Cards';
import { ReactComponent as HeroBgGradient } from '../assets/lights.svg';
import { Content } from '../components/Content/Content';
import { FirstContent } from '../components/Content1/FirstContent';
import { ThirdContent } from '../components/Content3/ThirdContent';
import { FormContent } from '../components/Form/Form';
import { Help } from '../components/Help/Help';
import { Calendar } from '../components/Calendar/Calendar';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
    
    return (
        <main id='start' className={classNames("page-wrapper", {}, [className])}>
            <Hero />
            <HeroBgGradient className="gradient" />
            <div className="BgColor"></div>
            <Cards />
            <Help />
            <FirstContent />
            <Content />
            <ThirdContent />
            <Calendar />
            <FormContent />
        </main>
    )
}
export default MainPage;
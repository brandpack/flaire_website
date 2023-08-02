/* eslint-disable max-len */
import { FC } from 'react'
import { classNames } from '../../components/classNames/classNames';
import cls from './About.module.scss'


interface AboutProps {
    className?: string;
}

const About: FC<AboutProps> = ({ className }) => {
    return (
        <main id='start' className={classNames("page-wrapper", {}, [className])}>
            <div className={cls.container}>
                <div className={cls.knowUs}>
                    <h1>Get to <br /> Know Us</h1>
                    <h2>OUR MISSION</h2>
                    <h3>Transform the way growing
                        fashion and apparel brands
                        and retailers operate, starting
                        by improving how brands manage their supply
                        chains end-to-end.
                    </h3>
                </div>
                <p>
                    Poor visibility into the status of incoming inventory and inefficiencies in the PO process can make the difference between profitable growth or business failure. Unfortunately, too many fashion brands and retailers rely on inefficient manual tracking and spreadsheets to try to keep their supply chains moving. <br /> <br />
                    Without real-time information about orders, suppliers, and incoming inventory, your team is flying blind when it comes to understanding cash needs, optimizing sales and marketing plans, and proactively identifying strategic opportunities to help grow the business. This can have significant business consequences, leading to lost revenue opportunities, delayed orders, and poor customer experiences. <br /> <br />
                    Good execution at each stage of the supply chain for fashion brands and retailers is needed in order to ensure products are timely delivered to market. Only by leveraging technology to increase efficiency and visibility throughout the supply chain can fashion brands and retailers remain competitive. <br /> <br />
                </p>
            </div>
            <div className={cls.smartest}>
                <div className={cls.Lline}></div>
                <h1>
                    Flaire is the smartest, most-intuitive back-office operating system to empower growing fashion and apparel brands to increase revenue, reduce costs, and save time.
                </h1>
                <div className={cls.Rline}></div>
            </div>
        </main>
    )
}

export default About;
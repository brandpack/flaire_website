import { FC } from 'react'
import { classNames } from '../../components/classNames/classNames';
import cls from './ToS.module.scss'


interface MainPageProps {
    className?: string;
}

const ToS: FC<MainPageProps> = ({ className }) => {
    return (
        <main id='start' className={classNames("page-wrapper", {}, [className])}>
            <div className={cls.container}>
                <div className={cls.contentHeader}><h1>Terms of Service</h1></div>
                <div className={cls.FirstBlock}>
                    <h2>1. Introduction</h2>
                    <p>Welcome to Castodia, Inc. (“Company”, “we”, “our”, “us”)! As you <br />
                        have just clicked our Terms of Service, please pause, grab a cup <br />
                        of coffee and carefully read the following pages. It will take you <br />
                        approximately 20 minutes.ed.
                    </p>
                    <p>
                        These Terms of Service (“Terms”, “Terms of Service”) govern your <br />
                        use of our web pages located at flairesoftware.com operated by <br />
                        Castodia, Inc.
                    </p>
                    <p>
                        Our Privacy Policy also governs your use of our Service and <br />
                        explains how we collect, safeguard and disclose information that <br />
                        results from your use of our web pages. Please read it here <br />
                        flairesoftware.com privacy.
                    </p>
                    <p>
                        Your agreement with us includes these Terms and our Privacy <br />
                        Policy (“Agreements”). You acknowledge that you have read and <br />
                        understood Agreements, and agree to be bound of them.
                    </p>
                    <p>
                        If you do not agree with (or cannot comply with) Agreements, <br />
                        then you may not use the Service, but please let us know by <br />
                        emailing at support@castodia.com so we can try to find a <br />
                        solution. These Terms apply to all visitors, users and others who <br />
                        wish to access or use Service.
                    </p>
                </div>
                <div className={cls.SecondBlock}>
                    <h2>2. Communications</h2>
                    <p>
                        By creating an Account on our Service, you agree to subscribe to <br />
                        newsletters, marketing or promotional materials and other <br />
                        information we may send. However, you may opt out of receiving <br />
                        any, or all, of these communications from us by following the <br />
                        unsubscribe link or by emailing at.
                    </p>
                </div>
                <div className={cls.ThirdBlock}>

                    <h2>3. Purchases</h2>
                    <p>
                        If you wish to purchase any product or service made available <br />
                        through Service (“Purchase”), you may be asked to supply certain <br />
                        information relevant to your Purchase including, without limitation, <br />
                        your credit card number, the expiration date of your credit card, <br />
                        your billing address, and your shipping information.
                    </p>
                    <p>
                        You represent and warrant that: (i) you have the legal right to use <br />
                        any credit card(s) or other payment method(s) in connection with <br />
                        any Purchase; and that (ii) the information you supply to us is <br />
                        true, correct and complete.
                    </p>
                    <p>
                        We may employ the use of third party services for the purpose of <br />
                        facilitating payment and the completion of Purchases. By <br />
                        submitting your information, you grant us the right to provide the <br />
                        information to these third parties subject to our Privacy Policy.
                    </p>
                    <p>
                        We reserve the right to refuse or cancel your order at any time for <br />
                        reasons including but not limited to: product or service <br />
                        availability, errors in the description or price of <br />
                        the product or service, error in your order or other reasons.
                    </p>
                    <p>
                        We reserve the right to refuse or cancel your order if fraud or an <br />
                        unauthorized or illegal transaction is suspected.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default ToS;
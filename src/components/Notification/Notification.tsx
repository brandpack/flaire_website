import React, { useState, useEffect } from 'react';
import './Notification.scss';
import { ReactComponent as MailPopup } from '../../assets/MailPopup.svg';

interface NotificationProps {
    message: string;
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ onClose }) => {
    const [showNotification, setShowNotification] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowNotification(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <div className={`notification ${showNotification ? 'show' : ''}`}>
            <div className="row">
                <MailPopup />
                <p>
                    <span className='green'>Your message has been sent</span> <br />
                    We will contact you shortly
                </p>

            </div>
        </div>
    );
};

export default Notification;

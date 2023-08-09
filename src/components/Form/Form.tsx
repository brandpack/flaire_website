import { FC, useRef, useState } from 'react'
import cls from './Form.module.scss'
import { classNames } from '../classNames/classNames';
import { AppLink } from '../AppLink/AppLink';
import emailjs from '@emailjs/browser';
import Notification from '../Notification/Notification';


interface FormProps {
    className?: string;
}

export const FormContent: FC<FormProps> = ({ className }) => {
    const form = useRef<HTMLFormElement>(null);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleNotificationClose = () => {
        setNotificationMessage('');
    };
    const resetForm = () => {
        if (form.current) {
            form.current.reset();
        }
    };
    const handleShowNotification = (text) => {
        setNotificationMessage(text);
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2460sdv', 'template_iy4pfzy', form.current, 'o2yUBy-adRIVEL-PH')
            .then((result) => {
                console.log(result.text);
                handleShowNotification('rer');
                resetForm();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className={classNames(cls.Form, {}, [className])}>
            {notificationMessage && (
                <Notification message={notificationMessage} onClose={handleNotificationClose} />
            )}
            <div className={cls.block}>
                <div className={cls.Hear}>
                    <h1>
                        We’d Love
                        to Hear
                        From You
                    </h1>
                    <p>
                        Whether you’re curious about features,
                        a demo, a job or even press - we’re ready
                        to answer any and all questions.
                    </p>
                </div>
                <div className={cls.FormBlock}>
                    <div className={cls.Header}>
                        <h2>Get in touch</h2>
                        <p>If you prefer, send us an email below and we&apos;ll reach out to you</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className={cls.inputs}>
                            <input placeholder="Full name" type="text" name="user_name" id="name" required />
                            <input placeholder="Work Email" type="email" name="user_email" id="email" required />
                        </div>
                        <textarea placeholder="Please share more details" name='message' />
                        <div className={cls.Message}>
                            <div className={cls.MessageText}>
                                <p className={cls.messageStar}>*</p>
                                <p>By clicking send, I agree that I have
                                    read and I accept the  <AppLink to={'/tos#start3'}>Terms of Service</AppLink>
                                </p>
                            </div>
                            <button type='submit' >Send message</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
import { FC, useRef } from 'react'
import cls from './Form.module.scss'
import { classNames } from '../classNames/classNames';
import { AppLink } from '../AppLink/AppLink';
import emailjs from '@emailjs/browser';


interface FormProps {
    className?: string;
}

export const FormContent: FC<FormProps> = ({ className }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2460sdv', 'template_iy4pfzy', form.current, 'o2yUBy-adRIVEL-PH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className={classNames(cls.Form, {}, [className])}>
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
                        <p>if you prefer, send us an email below and we&apos;ll reach out to you</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className={cls.inputs}>
                            <input placeholder="Full name" type="text" name="user_name" id="name" required />
                            <input placeholder="Email" type="email" name="user_email" id="email" required />
                        </div>
                        <textarea placeholder="Please share more details" name='message' />
                        <div className={cls.Message}>
                            <div className={cls.MessageText}>
                                <p className={cls.messageStar}>*</p>
                                <p>By send, you agree to our<br />
                                    <AppLink to={'/tos'}>Terms of Service</AppLink> and
                                    <AppLink to={'privacy'}> Privacy Policy</AppLink>
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
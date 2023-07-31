import { FC } from 'react'
import cls from './FirstContent.module.scss'
import { ReactComponent as AutoEmail } from '../../assets/AutoMail.svg';
import { ReactComponent as Chats } from '../../assets/Chats.svg';
import { ReactComponent as MailForm } from '../../assets/mailWrite.svg';
import { ReactComponent as Files } from '../../assets/Files.svg';
import { classNames } from '../classNames/classNames';

interface FirstContentProps {
    className?: string;
}

export const FirstContent: FC<FirstContentProps> = ({ className }) => {
    return (
        <div id='cont1' className={classNames(cls.FirstContent, {}, [className])}>
            <div className={cls.ContentImg}>
               
                <div className={cls.MainForm}>
                    <Chats className={cls.Chats} />
                    <MailForm className={cls.MailForm} />
                    <Files className={cls.Files} />
                    <AutoEmail className={cls.AutoEmail} />
                </div>
                
            </div>
            <div className={cls.ContentBlockText}>
                <h1 className={cls.ContentHeader}>
                    Centralize and streamline all of your communication
                </h1>
                <div className={cls.custom}>
                    <div className={cls.Suppliers}>suppliers</div>
                    <div className={cls.Factories}>factories</div>
                    <div className={cls.Customers}>customers</div>
                </div>
                <p className={cls.ContentText} >
                    Automate sending personalized customer outreach. 
                    Gather critical information from suppliers and factories faster. 
                    Easily share documents and send requests to external stakeholders. 
                    All from one place.
                </p>
                <p className={cls.ContentText} >
                    All documents, images, and messages are automatically 
                    saved to the corresponding order so nothing falls through the cracks.  
                </p>
            </div>
            
        </div>
    )
}
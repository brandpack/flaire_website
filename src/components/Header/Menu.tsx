/* eslint-disable max-len */
import { FC, useState } from 'react';
import cls from './Menu.module.scss';
import { classNames } from '../classNames/classNames';
import { AppLink, AppLinkTheme } from '../AppLink/AppLink';
import { ReactComponent as CRM } from '../../assets/CRM.svg';
import { ReactComponent as Factory } from '../../assets/Factory.svg';
import { ReactComponent as Finance } from '../../assets/Finance.svg';
import { ReactComponent as Inventory } from '../../assets/Inventory.svg';
import { ReactComponent as PO } from '../../assets/PO.svg';
import { ReactComponent as Product } from '../../assets/Product.svg';
import { ReactComponent as Project } from '../../assets/Project.svg';
import { ReactComponent as Reporting } from '../../assets/Reporting.svg';
import { ReactComponent as Sales } from '../../assets/Sale.svg';

interface MenuProps {
    className?: string;
    burger: boolean;
    burgerFn: any;
}

const HeaderLinks = [
    { id: 1, text: 'How it works', link: '/#cont1', hasDropdown: false },
    {
        id: 2,
        text: 'Features',
        hasSimpleDropdown: true,
        hasDropdown: true,
        dropdownItems: [
            {
                id: 5,
                text: 'Vendor managment',
                link: '/team',
                icon: <Factory />,
            },
            {
                id: 6,
                text: 'CRM & Clienteling',
                link: '/team',
                icon: <CRM />,
            },
            {
                id: 7,
                text: 'Inventory Management',
                link: '/team',
                icon: <Inventory />,
            },
            {
                id: 8,
                text: 'PO & Supply Chain Management',
                link: '/mission',
                icon: <PO />,
            },
            {
                id: 9,
                text: 'Sales & Order Management',
                link: '/mission',
                icon: <Sales />,
            },
            {
                id: 10,
                text: 'Finance & Accounting',
                link: '/mission',
                icon: <Finance />,
            },
            {
                id: 11,
                text: 'Product Information Management',
                link: '/mission',
                icon: <Product />,
            },
            {
                id: 12,
                text: 'Project Management',
                link: '/mission',
                icon: <Project />,
            },
            {
                id: 13,
                text: 'Reporting',
                link: '/mission',
                icon: <Reporting />,
            },
        ],
    },
    { id: 3, text: 'About', link: '/about#start1', hasDropdown: false },
    { id: 4, text: 'Blog', link: '/blog#start2', hasDropdown: false },
];

export const Menu: FC<MenuProps> = ({ className, burger, burgerFn }) => {
    // State to handle dropdown visibility
    const [showDropdown, setShowDropdown] = useState<number | null>(null);

    // Click event handler for toggling dropdown visibility (mobile)
    const handleDropdownClick = (id: number) => {
        if (showDropdown === id) {
            setShowDropdown(null); // Close the dropdown if it's already open
        } else {
            setShowDropdown(id); // Open the dropdown if it's closed
        }
    };

    // Hover event handler for toggling dropdown visibility (desktop)
    const handleMouseEnter = (id: number) => {
        setShowDropdown(id);
    };

    // Hover event handler for closing dropdown on mouse leave (desktop)
    const handleMouseLeave = () => {
        setShowDropdown(null);
    };

    // Media query for mobile devices
    const isMobile = window.innerWidth <= 825;

    return (
        <div className={classNames(cls.Menu, { [cls.collapsed]: burger }, [className])}>
            {HeaderLinks.map((l) => {
                const hasDropdown = l.hasDropdown;
                const isSimpleDropdown = l.hasSimpleDropdown;
                const isDropdownVisible = showDropdown === l.id;

                return (
                    <div className={classNames(cls.block, { [cls.Mobile]: hasDropdown }, [])} key={l.id}>
                        {isSimpleDropdown ? (
                            <div
                                onClick={() => (isMobile ? handleDropdownClick(l.id) : undefined)} // Show on click for mobile
                                onMouseEnter={() => (!isMobile ? handleMouseEnter(l.id) : undefined)} // Show on hover for desktop
                                onMouseLeave={() => (!isMobile ? handleMouseLeave() : undefined)} // Hide on mouse leave for desktop
                                className={classNames(cls.MenuLink, { [cls.Mobile]: true }, [])}
                                style={{ cursor: isMobile ? 'pointer' : 'default', display: 'flex', gap: '6px', flexDirection: 'row' }}
                            >
                                {l.text}<svg style={{alignSelf: 'center'}} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6.06494L7 11.0649L12 6.06494" stroke="#E6E3FB" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        ) : (
                            <AppLink
                                onClick={() => {
                                    burgerFn(!burger);
                                    setShowDropdown(null); // Close any open dropdown when a link is clicked
                                }}
                                theme={AppLinkTheme.MENU}
                                className={cls.MenuLink}
                                to={l.link}
                            >
                                {l.text}
                            </AppLink>
                        )}

                        {hasDropdown && (
                            <div
                                className={classNames(cls.DropdownContent, { [cls.Open]: isDropdownVisible && !isMobile,[cls.OpenM]: isDropdownVisible && isMobile }, [])} // Show on hover for desktop
                            >
                                {l.dropdownItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        // onClick={() => {
                                        //     burgerFn(false); // Close burger menu if open
                                        //     setShowDropdown(null); // Close the dropdown when an item is clicked
                                        // }}
                                        className={classNames(cls.DropdownLink, { [cls.lines]: index === 4 }, [])}
                                        style={{
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {item.icon && (
                                            <div>
                                                {item.icon}
                                            </div>
                                        )}
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};


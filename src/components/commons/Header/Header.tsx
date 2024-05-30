
import { Link } from "react-scroll";
import React, { useEffect, useState } from 'react';
import './HeaderStyles.sass'
import { HeaderLinkState } from './HeaderLinkState'
import { Icon } from '../Icon';


export const Header = () => {
    const [showLink, setShowLink] = useState(false)
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        setShowLink(window.innerWidth >= 1024)
        const handleResize = () => {
            setShowLink(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        setScroll(window.scrollY)
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scroll > 450 ? 'show' : ''}`} id="header" style={{ position: `${scroll > 450 ? 'fixed' : 'absolute'}` }}>
            <div className="header wrapper">
                <Link to="link-start" activeClass="active" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                    <Icon className={'header__logo'} iconId={'YourTour'}
                        width='182' height='30' viewBox='0 0 182 30'
                    />
                </Link>
                {showLink ?
                    <nav>
                        <ul className='header__list'>
                            {HeaderLinkState.map((link, i) =>
                                <li key={i}>
                                    <Link className="list__item list__item--hover" offset={-100}
                                        activeClass="active" spy={true} smooth={true} to={link.href}>{link.title}</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                    : ''}
                <span>
                    <a className='list__item' href="tel:7 999 999 99 99"> +7 999 999 99 99</a>
                </span>
            </div>
        </header>
    );
};


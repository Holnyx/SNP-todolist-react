"use client"

import { Icon } from "../Icon"
import './buttonComponent.sass'
import { useEffect, useState } from "react";

export const ButtonInfo = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(window.innerWidth > 1023)
        const handleResize = () => {
            setShow(window.innerWidth > 1023);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <a href="#" className={show ? 'button-info' : 'button-info button-low-viewport'}>Подробнее
            <Icon width="24" height="26" viewBox="0 0 24 26" iconId={"Arrow"} />
        </a>
    )
}
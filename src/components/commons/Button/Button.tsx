import React, { FC, memo, useRef } from 'react';

type ButtonFilteredType = {
    href?: string;
    title: string;
    className: string;
    onClick?: () => void;
};

const Button: FC<ButtonFilteredType> = ({ title, className, onClick, href }) => {

    return href ? (
        <a href={href} className={className} onClick={onClick}>{title}</a>
    ) : (
        <button className={className} onClick={onClick}>{title}</button>
    );
};

export default Button;



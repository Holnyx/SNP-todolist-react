import React, { FC, memo, useRef } from 'react';

type ButtonFilteredType = {
    href?: string;
    title: string;
    className: string;
    id?: string;
    onClick?: () => void;
};

const ButtonFiltered: FC<ButtonFilteredType> = ({ title, className, id, onClick, href }) => {

    return href ? (
        <a href={href} className={className} id={id} onClick={onClick}>{title}</a>
    ) : (
        <button className={className} id={id} onClick={onClick}>{title}</button>
    );
};

export default memo(ButtonFiltered);



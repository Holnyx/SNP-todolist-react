import React, { FC } from 'react';

type ButtonType = "submit" | "reset" | "button" | undefined

type ButtonFormPropsType = {
    className: string
    type: ButtonType
    title: string
    id?: string
    onClick?: () => void
}


export const ButtonForm: FC<ButtonFormPropsType> = ({ className, title, type, id, onClick, ...restProps }) => {
    return (
        <button className={className} type={type} id={id} onClick={onClick} {...restProps}>{title}</button>
    );
};


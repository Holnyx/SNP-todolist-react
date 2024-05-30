import React, { FC } from 'react';

type InputFieldPropsType = {
    htmlFor: string
    name: string
    placeholder?: string
    required?: boolean
    className: string
    type: string
    id: string
    title: string
    maxLength?: number
    pattern?: string
    max?: string | number 
}

export const InputField: FC<InputFieldPropsType> = ({ htmlFor, name, placeholder, required, className, type, id, title, maxLength, pattern, max }) => {
    return (
        <div className="input-box">
            <label htmlFor={htmlFor}>{title}</label>
            <input name={name} placeholder={placeholder} required={required} className={className} type={type}
                id={id} maxLength={maxLength} pattern={pattern} max={max}></input>
        </div>
    );
};


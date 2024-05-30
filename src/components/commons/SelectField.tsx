import React, { ChangeEvent, FC, SelectHTMLAttributes, useState } from 'react';
import { Icon } from './Icon'

export type directionOptionsType = {
    value: string
    title: string
    disabled?: boolean
}

const directionOptions: directionOptionsType[] = [
    { value: "color", title: "Куда хотите ехать", disabled: true },
    { value: "select", title: "Пункт выбран" },
    { value: "select2", title: "Пункт выбран другой" }
];

type SelectFieldPropsType = {
    title: string
    htmlFor: string
    defaultValue: string
    required?: boolean
    className: string
    name: string
    id: string
}

export const SelectField: FC<SelectFieldPropsType> = ({ title, htmlFor, defaultValue, required, className, name, id}) => {
    const [select, setSelect] = useState(true)

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelect(event.currentTarget.value === "color");
    };

    return (
        <div className="input-box">
            <label htmlFor={htmlFor}>{title}</label>
            <select defaultValue={defaultValue}  required={required} className={`${className} ${select ? 'select-placeholder' : ''}`}
                name={name} id={id} onChange={handleChange} >
                {directionOptions.map((option, i) =>
                    <option key={i} value={option.value} disabled={option.disabled} >{option.title}</option>
                )}
            </select>
            <Icon iconId={'ic-dropdown'} className='ic-dropdown' viewBox='0 0 26 26' width='26' height='26' />
        </div>
    );
};

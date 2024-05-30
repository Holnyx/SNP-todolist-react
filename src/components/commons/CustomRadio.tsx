import React, { FC } from 'react';

type CustomRadioPropsType ={
    id: string
    htmlFor: string
    title: string
    name: string
}

export const CustomRadio: FC<CustomRadioPropsType> = ({id, htmlFor, title, name}) => {
    return (
        <div className="form__check-yes-no-flex">
            <input className="real-radio" type="radio" id={id} name={name} ></input>
            <label className="custom-radio" htmlFor={htmlFor}></label>
            <label htmlFor={htmlFor}>{title}</label>
        </div>
    );
};


import React, { FC } from 'react';
import { Icon } from './Icon';

type CustomCheckBoxPropsType = {
    label?: string
    link?: string
}

export const CustomCheckBox: FC<CustomCheckBoxPropsType> = ({label, link}) => {
    return (
        <>
            <input className="checkbox" type="checkbox" id="confirm" required></input>
            <label className="custom-checkbox" htmlFor="confirm">
                <Icon iconId={'custom-checkbox-img'} className='custom-checkbox-img' width='13' height='10' viewBox='0 0 13 10' />
            </label>
            <label className="checkbox__label" htmlFor="confirm">{label}<a
                href="">{link}</a></label>
        </>
    );
};


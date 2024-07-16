import React, { FC, memo } from 'react';
import { TaskStateItems } from '@/pages/HomePage/HomePage';
import cx from 'classnames';
import s from './CustomCheckboxAllTasks.module.sass'

type CustomCheckboxAllTasksItems = {
    tasks: TaskStateItems[]
    onClickHandler: () => void
}

const CustomCheckboxAllTasks: FC<CustomCheckboxAllTasksItems> = ({ tasks, onClickHandler }) => {

    const changeStyleCheckbox = cx({
        [s['img']]: true,
        [s['img--hide']]: tasks.length === 0,
        [s['img--show']]: tasks.some(item => !item.isDone),
        [s['img--change-color']]: tasks.every(item => item.isDone)
    });

    return (
        <>
            <input className={cx(s.checkbox)} type="checkbox"/>
            <label htmlFor="checkbox-checked-all" className={s['custom-checkbox']}>
                <svg onClick={onClickHandler} className={changeStyleCheckbox} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M13 19.4141L4.29289 10.707C3.90236 10.3164 3.90237 9.68326 4.29289 9.29274C4.68341 8.90221 5.31658 8.90221 5.7071 9.29274L13 16.5856L20.2929 9.29274C20.6834 8.90221 21.3166 8.90221 21.7071 9.29274C22.0976 9.68326 22.0976 10.3164 21.7071 10.707L13 19.4141Z"
                        fill="#1B1F2B" />
                </svg>
            </label>
        </>
    );
}
export default memo(CustomCheckboxAllTasks)

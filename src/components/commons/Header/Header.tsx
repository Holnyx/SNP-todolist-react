import React, { memo } from 'react';
import s from '/src/styles/style.module.sass'

const Header = memo(() => {
    return (
        <header>
            <h3 className={s.logo}>TodoList</h3>
        </header>
    );
})
export default Header

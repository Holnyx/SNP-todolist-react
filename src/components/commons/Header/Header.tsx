import React, { memo } from 'react';

import s from './Header.module.sass';

const Header = () => {
  return (
    <header>
      <h3 className={s.logo}>TodoList</h3>
    </header>
  );
};
export default memo(Header);

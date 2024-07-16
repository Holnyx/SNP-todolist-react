import React from 'react';
import ButtonFiltered from '../ButtonFiltered/ButtonFiltered';
import s from './NotFound.module.sass'

const NotFoundPage = () => {
    return (
        <div className={s['not-found-page']}>
            <h2 className={s['not-found-page__title']}>404</h2>
            <h2 className={s['not-found-page__title']}>Not Found</h2>
            <p className={s['not-found-page__info']}>Could not find requested resource</p>
            <ButtonFiltered href="/" title={'Return Home'} className={s['not-found-page__link-home']} />
        </div>
    );
};

export default NotFoundPage;
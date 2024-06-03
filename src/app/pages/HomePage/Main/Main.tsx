import React from 'react';
import './Main.sass'
// style={{ backgroundImage: `url('/img/header-img.webp')` }}

export const Main = () => {
    return (
        <main className='main' id="link-start" >
            <h1 className='main__title'>Идеальные путешествия существуют</h1>
            <span className='main__sub-title'>Идейные соображения высшего порядка, а также рамки и место обучения
                кадров</span>
            <a className='button-find button-find--hover button-find--active' href="">Найти тур</a>
        </main>
    );
};

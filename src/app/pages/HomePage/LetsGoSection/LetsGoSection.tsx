import React from 'react';
import './LetsGoStyle.sass'
import Image from 'next/image';

export const LetsGoSection = () => {
    return (
        <div className="lets-go">
            <Image className="lets-go__img" src={'/SNP-layout-react/img/footer-photo.png'} alt="Дом в горах" unoptimized priority={true}></Image>
            <div className="lets-go__text-box">
                <h3 className="text-box__title">Пора в путешествие вместе с нами!</h3>
                <span className="text-box__subtitle">Напиши на почту и узнай подробности на
                    <a className="subtitle__email" href="#"> yourtour@gmail.com</a>
                </span>
            </div>
        </div>
    );
};


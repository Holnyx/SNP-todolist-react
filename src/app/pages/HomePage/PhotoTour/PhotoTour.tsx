
import React, { useEffect, useState } from 'react';
import './PhotoTour.sass'
import { TravelPhotoStateType, travelPhotoState } from './photoTourState';
import Image from 'next/image';

export const PhotoTour = () => {
    const [show, setShow] = useState(0)

    useEffect(() => {
        setShow(window.innerWidth)
        const handleResize = () => {
            setShow(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getStyle = (photo: TravelPhotoStateType) => {
        if (show < 768 ? (photo.class === 'image-off' || photo.class === 'image-off-viewport') : '') {
            return { display: 'none' };
        }
        if (show < 1025 && photo.class === 'image-off') {
            return { display: 'none' };
        }
        return {}
    };

    return (
        <section className="photo">
            <div className="info">
                <h2 className="info__title">Фотографии путешествий</h2>
                <span className="info__sub-title">Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров</span>
            </div>
            <div className="images-travel">
                <figure className="images-travel__box">
                    {travelPhotoState.map((photo, i) =>
                        <Image key={i} className={photo.class} src={`${photo.src}`} alt={photo.alt} style={getStyle(photo)} unoptimized priority={true}></Image>
                    )}
                </figure>
            </div>
        </section>
    );
};

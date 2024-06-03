import React from 'react';
import './Review.sass'
import { tourReview } from './reviewTourState';
import Image from 'next/image';


export const ReviewTour = () => {
    return (
        <section className="tour-review wrapper">
            <div className="info">
                <h2 className="info__title" id="link-review">Отзывы наших путешественников</h2>
                <span className="info__sub-title">Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров</span>
            </div>
            <div id="tour-review" className="tour-review__rewiew-boxes">
                {tourReview.map((tour, i) =>
                    <div key={i} className='review' id='tour-review'>
                        <span className="review__info">
                            {tour.review.split('\n').map((line, j) => (<React.Fragment key={j}>{line}<br /></React.Fragment>))}
                        </span>
                        <div className='person-container'>
                            <div className='person-container__text'>
                                <span>{tour.name}</span>
                                <span>{tour.title}</span>
                            </div>
                            <Image src={tour.avatar} alt="photo-person" width={100} height={100} unoptimized priority={true}></Image>
                        </div>
                    </div >
                )}

            </div>
        </section>
    );
};
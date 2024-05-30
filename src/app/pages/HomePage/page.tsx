"use client"

import React from 'react';
import '@/styles/reset.sass'
import '@/styles/wrapper.sass'
import '@/styles/sectionHeadings.sass'
import '@/styles/gap.sass'
import '@/styles/style.sass'
import { Header } from '@/components/commons/Header/Header';
import { Main } from './Main/Main';
import { Journey } from './Journey/Journey';
import { CreateTour } from './CreateTour/CreateTour';
import { ReviewTour } from './ReviewTour/ReviewTour';
import { PhotoTour } from './PhotoTour/PhotoTour';
import { TravelHistory } from './TravelHistory/TravelHistory';
import { Footer } from '@/components/commons/Footer/Footer';

function HomePage({ }) {
  return (
    <div className="App gap">
      <Header />
      <Main />
      <Journey />
      <CreateTour />
      <ReviewTour />
      <PhotoTour />
      <TravelHistory />
      <Footer />
    </div>
  );
}

export default HomePage;

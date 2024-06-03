
import React from 'react';
import '/src/styles/reset.sass'
import '/src/styles/wrapper.sass'
import '/src/styles/sectionHeadings.sass'
import '/src/styles/gap.sass'
import '/src/styles/style.sass'
import { Header } from '@/components/commons/Header/Header';
import { Main } from './Main/Main';
import { Journey } from './Journey/Journey';
import { CreateTour } from './CreateTour/CreateTour';
import { ReviewTour } from './ReviewTour/ReviewTour';
import { PhotoTour } from './PhotoTour/PhotoTour';
import { TravelHistory } from './TravelHistory/TravelHistory';
import { Footer } from '@/components/commons/Footer/Footer';

function App({ }) {
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

export default App;

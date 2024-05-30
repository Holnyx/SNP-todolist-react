

import React from 'react';
import '@/styles/reset.sass'
import '@/styles/wrapper.sass'
import '@/styles/sectionHeadings.sass'
import '@/styles/gap.sass'
import '@/styles/style.sass'
import HomePage from './HomePage/page';

function Home({ }) {
  return (
    <div className="App gap">
      <HomePage/>
    </div>
  );
}

export default Home;


import React from 'react';
import '/src/styles/reset.sass'
import '/src/styles/wrapper.sass'
import '/src/styles/sectionHeadings.sass'
import '/src/styles/gap.sass'
import '/src/styles/style.sass'
import HomePage from './HomePage/page';

function Home({ }) {
  return (
    <div className="App gap">
      <HomePage/>
    </div>
  );
}

export default Home;

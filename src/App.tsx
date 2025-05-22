import React from 'react';
import './App.css';
import BadDataChart from './Charts/BadDataChart';
import RandomDataChart from './Charts/RandomDataChart';
import ExtremeDataChart from './Charts/ExtremeDataChart';
import AccumulatedDataChart from './Charts/AccumulatedDataChart';
import BadDataAccumulatedChart from './Charts/BadDataAccumulatedChart';
import RealisticChart from './Charts/RealisticChart';

function App() {
  return (
    <div className="App">
      <div className='bg'>
        <RandomDataChart />
        <BadDataChart />
        <ExtremeDataChart />
        <AccumulatedDataChart />
        <BadDataAccumulatedChart />
        <RealisticChart />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import BadDataChart from './Charts/BadDataChart';
import RandomDataChart from './Charts/RandomDataChart';
import ExtremeDataChart from './Charts/ExtremeDataChart';

function App() {
  return (
    <div className="App">
      <div className='bg'>
        <RandomDataChart />
        <BadDataChart />
        <ExtremeDataChart />
      </div>
    </div>
  );
}

export default App;

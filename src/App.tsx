import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { Tab } from "./Sidebar/sidebarTypes";
import BadDataChart from './Charts/BadDataChart';
import RandomDataChart from './Charts/RandomDataChart';
import ExtremeDataChart from './Charts/ExtremeDataChart';
import AccumulatedDataChart from './Charts/AccumulatedDataChart';
import BadDataAccumulatedChart from './Charts/BadDataAccumulatedChart';
import RealisticChart from './Charts/RealisticChart';

function App() {
  const tabs: Tab[] = [
    {
      id: "RandomDataChart",
      label: "Random Data Chart",
      content: <RandomDataChart />,
    },
    {
      id: "BadDataChart",
      label: "Bad Data Chart",
      content: <BadDataChart />,
    },
    {
      id: "ExtremeDataChart",
      label: "Extreme Data Chart",
      content: <ExtremeDataChart />,
    },
    {
      id: "AccumulatedDataChart",
      label: "Accumulated Data Chart",
      content: <AccumulatedDataChart />,
    },
    {
      id: "BadDataAccumulatedChart",
      label: "Bad Data Accumulated Chart",
      content: <BadDataAccumulatedChart />,
    },
    {
      id: "RealisticChart",
      label: "Realistic Chart",
      content: <RealisticChart />,
    },
  ];
  return (
    <div className="App">
      <Router><Sidebar tabs={tabs} /></Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { Tab } from "./Sidebar/sidebarTypes";
import BadDataChart from './Charts/BadDataChart';
import ExtremeDataChart from './Charts/ExtremeDataChart';
import RealisticChart from './Charts/RealisticChart';
import GuestChart from './Charts/GuestsChart';

function App() {
  const tabs: Tab[] = [
    {
      id: "RealisticChart",
      label: "Realistic Chart",
      content: <RealisticChart />,
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
      id: "GuestChart",
      label: "GuestChart",
      content: <GuestChart />
    }
  ];
  return (
    <div className="App">
      <Router><Sidebar tabs={tabs} /></Router>
    </div>
  );
}

export default App;

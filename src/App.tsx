import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { Tab } from "./Sidebar/sidebarTypes";
import Chart from './Charts/Chart';

function App() {
  const tabs: Tab[] = [
    {
      id: "Chart",
      label: "Chart",
      content: <Chart />
    },
  ];
  return (
    <div className="App">
      <Router><Sidebar tabs={tabs} /></Router>
    </div>
  );
}

export default App;

import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { Tab } from "./Sidebar/sidebarTypes";
import Chart from './Charts/Chart';
import DatePicker from './DatePicker/DatePicker';
import Form from './Form/Form';

function App() {
  const tabs: Tab[] = [
    {
      id: "Chart",
      label: "Chart",
      content: <Chart />
    },
    {
      id: "DatePicker",
      label: "DatePicker",
      content: <DatePicker />
    },
    {
      id: "Form",
      label: "Form",
      content: <Form />
    },
  ];
  return (
    <div className="App">
      <Router><Sidebar tabs={tabs} /></Router>
    </div>
  );
}

export default App;

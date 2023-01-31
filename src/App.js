import { Link, Route, Switch } from 'react-router-dom';
import SongTable from './components/Table/SongTable.js';
import './App.css';
import NewChart from './components/Chart/NewChart.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <SongTable />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <NewChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

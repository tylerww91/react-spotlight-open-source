import { Link, Route, Switch } from 'react-router-dom';
import SongTable from './components/Table/SongTable.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <SongTable />
          <h1>Table Libary</h1>
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

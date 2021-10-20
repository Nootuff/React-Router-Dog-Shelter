import { Route, Switch, Link, NavLink } from "react-router-dom";
import './styles/App.css';
import Dogs from './components/Dogs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />

<Dogs />

<Switch>
      
        
      </Switch>
    </div>
  );
}

export default App;

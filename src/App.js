import './App.css';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom"  
import { Regular } from './Components/Regular.jsx'
import { Hot } from './Components/Hot.jsx';


function App() {
  return (
    <div className="App">
   
      <div className="titlebcg"><h1 className="title">MEMS FOR PROGRAMERS</h1></div>
      <Router>
      <div className="table">
        <ul className="nav_buttons">
          <button>
            <NavLink exact to ="/" >REGULAR</NavLink> 
          </button>
          <button>
            <NavLink to ="/hot" >HOT</NavLink>
          </button>
        </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Regular />
          </Route>
          <Route path="/hot">
            <Hot />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;




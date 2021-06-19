import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import { Regular } from "./Components/Regular.jsx";
import { Hot } from "./Components/Hot.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas)

function App() {
  return (
    <Router>
      <div className="App">
        <div className="titlebcg">
          <h1 className="title">MEMS FOR PROGRAMERS</h1>
        </div>
        <div className="nav">
          <ul className="nav_buttons">
            <button>
              <NavLink exact to="/">
                REGULAR
              </NavLink>
            </button>
            <button>
              <NavLink to="/hot">HOT</NavLink>
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
            <div className="error404">404<br/>Page not found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

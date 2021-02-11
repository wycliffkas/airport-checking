import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/styles.css";
import SearchFlight from "./pages/SearchFlight";
import Register from "./pages/Register"
import Confirm from "./components/Confirm"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/confirm" component={Confirm} />
        <Route exact path="/" component={SearchFlight} />
      </Switch>
    </Router>
  );
}

export default App;

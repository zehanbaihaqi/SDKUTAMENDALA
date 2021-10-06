import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import Edit from "./Edit";
import BasicCard from "./Card";
import BasicTable from "./Tabel";
import ListPassenger from "./getQuert";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/create" exact>
              <Create />
            </Route>
            <Route path="/card" exact>
              <BasicCard />
            </Route>
            <Route path="/edit" exact>
              <Edit />
            </Route>
            <Route path="/pendaftar" exact>
              <ListPassenger />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

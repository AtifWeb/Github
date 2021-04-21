import "./App.css";
import Main from "./app/pages/Main";
import Ideas from "./app/pages/Ideas";
import Header from "./app/shared/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SpecificIdea from "./app/pages/SpecificIdea";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/idea" exact>
            <Ideas />
          </Route>

          <Route path="/idea/show/:id" exact>
            <SpecificIdea />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

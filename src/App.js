import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Fragment>
          <div className="app">
            <Route
              exact
              path="/checkout"
              render={() => (
                <Fragment>
                  <Checkout />
                </Fragment>
              )}
            />

            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Home />
                </Fragment>
              )}
            />
          </div>
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;

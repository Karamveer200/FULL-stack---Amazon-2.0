import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER-", authUser);

      if (authUser) {
        //User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Fragment>
          <div className="app">
            <Route
              exact
              path="/login"
              render={() => (
                <Fragment>
                  <Login />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/checkout"
              render={() => (
                <Fragment>
                  <Header />
                  <Checkout />
                </Fragment>
              )}
            />

            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Header />
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

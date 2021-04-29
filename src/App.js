import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [, dispatch] = useStateValue();

  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe(
      "pk_test_51IklrCFsqeN1fp75EedHyiucreH9z2TGKMW08VMuEEGjQkmrNcrdygQ3K4cATjjA5KgJscGdBOZgfxpUNWEWJ9Vy00SkQpmSuD"
    )
  );

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
  }, [dispatch]);
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
              path="/orders"
              render={() => (
                <Fragment>
                  <Header />
                  <Orders />
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
              path="/payment"
              render={() => (
                <Fragment>
                  <Header />
                  <Elements stripe={stripePromise}>
                    <Payment />
                  </Elements>
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

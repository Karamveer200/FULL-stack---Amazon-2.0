import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import {
  AlertsProvider,
  createRcaTheme,
  createRcaSettings,
} from "react-context-alerts";

//Alert thems
const rcaTheme = createRcaTheme({
  info: {
    body: {
      background: "#fff",
      color: "black",
    },
  },
});

const rcaSettings = createRcaSettings({
  showCloseButton: true,
  info: {
    showProgressBar: true,
    timeout: 1300,
  },
  error: {
    enableClickAwayListener: true,
    showProgressBar: true,
    timeout: 1300,
  },
});

ReactDOM.render(
  <Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <AlertsProvider theme={rcaTheme} settings={rcaSettings}>
        <App />
      </AlertsProvider>
    </StateProvider>
  </Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

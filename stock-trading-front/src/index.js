import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import stockTradingReducer from "./reducers/stockTradingReducer";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  stockTradingReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" render={routerProps => <App store={store} />} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

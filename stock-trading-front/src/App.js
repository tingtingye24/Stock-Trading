import React from "react";
import Navbar from "./containers/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Transactions from "./containers/Transactions";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Profilio from "./containers/Profilio";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      {props.user ? <Navbar /> : null}
      <Switch>
        {props.user ? (
          <>
            <Route
              exact
              path="/portfolio"
              render={routerProps => <Profilio />}
            />
            <Route
              exact
              path="/transactions"
              render={routerProps => <Transactions />}
            />
          </>
        ) : null}
        <Route exact path="/" render={routerProps => <Login />} />} />
        <Route exact path="/signup" render={routerProps => <Signup />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(App);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div class = "navbar">
      <Link to="/portfolio">Portfolio</Link> 
      {" | "}
      <Link to="/transactions">Transactions</Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name
  };
};

export default connect(mapStateToProps)(Navbar);

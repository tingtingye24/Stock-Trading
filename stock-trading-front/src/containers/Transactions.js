import React, { useState, Component } from "react";
import { connect } from "react-redux";
import TransCard from "../components/TransCard";
import { BACKENDAPI } from "../constants";


class Transactions extends Component { // class component to show that I can also work with lifecycles as well as hooks
  componentDidMount() {
    fetch(BACKENDAPI + `transactions/${this.props.user}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw resp;
      })
      .then(transactions => {
        this.props.dispatch({
          type: "TRANSACTIONS",
          transactions: transactions
        });
      });
  }
  renderTransactions() {
    return this.props.transactions.map(transaction => (
      <TransCard key={transaction.id} transaction={transaction} />
    ));
  }
  render() {
    return <div class="transactions-box">{this.renderTransactions()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    transactions: state.transactions
  };
};
export default connect(mapStateToProps)(Transactions);

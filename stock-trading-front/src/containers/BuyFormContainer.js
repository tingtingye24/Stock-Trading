import React, { useState } from "react";
import { connect } from "react-redux";
import { BACKENDAPI } from "../constants";

function BuyFormContainer(props) {
  const [ticker, setTicker] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState(null);

  const convertWalletToUSD = price => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  const fetchStocks = () => {
    if (props.user) {
      fetch(BACKENDAPI + `/users/profilio/${props.user}`)
        .then(resp => resp.json())
        .then(data => {
          if (Object.entries(data).length > 0) {
            props.dispatch({ type: "STOCKS", stocks: data });
          }
        });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(BACKENDAPI + "transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: props.user,
        ticker: ticker,
        stock_amount: quantity
      })
    })
      .then(resp => resp.json())
      .then(data => {
        setTicker("");
        setQuantity("");
        if (data.id) {
          props.dispatch({
            type: "BUY",
            wallet: props.wallet - data.price * data.stock_amount
          });

          fetchStocks();
        } else {
          setErrors(data);
        }
      });
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <h1>
          Cash:{" "}
          {props.wallet ? convertWalletToUSD(props.wallet) : "Please Sign IN"}
        </h1>
        <div class="errors">
          {errors ? errors.map(error => <h5>{error}</h5>) : null}
        </div>
        <input
          type="text"
          placeholder="Ticker"
          value={ticker}
          onChange={e => setTicker(e.target.value)}
        />
        <input
          type="number"
          placeholder="Qty"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <button type="submit">BUY</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    wallet: state.wallet
  };
};
export default connect(mapStateToProps)(BuyFormContainer);

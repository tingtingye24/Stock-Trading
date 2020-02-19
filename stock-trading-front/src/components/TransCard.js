import React from "react";

export default function TransCard(props) {
  const {
    ticker,
    stock_amount,
    total,
    open_price,
    current_price,
    price
  } = props.transaction;

  function openPriceColor () {
      if(open_price > current_price){
          return "open-price-greater"
      }else if(open_price === current_price){
          return "open-price-equal"
      }else {
          return "open-price-less"
      }
  }


  return (
    <div>
      <div class={open_price ? openPriceColor() : null}>
        <h1 class="trans-card-h1">
          {ticker ? `(BUY) ${ticker}` : props.stockKey}
        </h1>
        <h3 class="trans-card">{stock_amount} Shares</h3>
        {open_price ? (
          <div>
            <h3>Brought Price: ${price}</h3>
            <h3>Open Price:${open_price}</h3>{" "}
            <h3>Current Price: ${current_price}</h3>
          </div>
        ) : <h3>{total}</h3>}
      </div>
      <h2>-----------------------------------------</h2>
    </div>
  );
}

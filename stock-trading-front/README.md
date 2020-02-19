This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objectives

- [X] Default value of users are $5000 USD
- [X] Users can register using their email
- [X] Users are autheniticated using bcrpyt in the Backend API
- [X] Users can buy whole quantities of shares and only to the amount allowed in their account with a valid ticker
- [X] Users are able to see all transactions done in the account
- [X] Users can view their portfolio to view their current stocks and current price
- [X] Colors of stocks indicates if current value is greater, less than, or equal to the open price.


### Problems
- IEX API doesn't provide the open price of the stocks.
- Used 2 APIs for gaining the stocks which created a discrepancy in values in the portfolio stock values
- API only allows 5 hits per minute 
- API would sometimes return 0 for current value of the stock.

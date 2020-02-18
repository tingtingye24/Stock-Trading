export default function stockTradingReducer(
  state = {
    transactions: [],
    stocks: {},
  },
  action
) {
  switch (action.type) {
    case "LOGIN":
      console.log("loging in");
      return {
        ...state,
        user: action.user,
        wallet: action.wallet,
        name: action.name
      };
    case "TRANSACTIONS":
      console.log("all transactions")
      return{
        ...state,
        transactions: action.transactions
      }
    case "BUY":
      console.log("brought some stocks")
      return {
        ...state, 
        wallet: action.wallet
      }
    case "STOCKS":
      console.log("stocks are in")
      return {
        ...state,
        stocks: action.stocks
      }
    case "TOTAL":
      console.log("saving total")
      return {
        ...state,
        total: action.total
      }
    default:
      return state;
  }
}

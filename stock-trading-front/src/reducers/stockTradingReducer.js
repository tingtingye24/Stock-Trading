export default function stockTradingReducer(
  state = {
    transactions: [],
    stocks: {},
    total: 0
  },
  action
) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
        wallet: action.wallet,
        name: action.name
      };
    case "TRANSACTIONS":
      return{
        ...state,
        transactions: action.transactions
      }
    case "BUY":
      return {
        ...state, 
        wallet: action.wallet
      }
    case "STOCKS":
      return {
        ...state,
        stocks: action.stocks
      }
    case "TOTAL":
      return {
        ...state,
        total: action.total
      }
    default:
      return state;
  }
}

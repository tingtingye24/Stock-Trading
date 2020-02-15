class TransactionsController < ApplicationController

    def show
        user = User.find(params[:id])
        transactions = user.transactions
        # newTransaction = Transaction.addCurrentPrice(transactions)
        render json: transactions
    end
end

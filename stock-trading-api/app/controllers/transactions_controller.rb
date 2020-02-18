class TransactionsController < ApplicationController

    def show
        user = User.find(params[:id])
        transactions = user.transactions
        # newTransaction = Transaction.addCurrentPrice(transactions)
        render json: transactions
    end

    def create
        # client = IEX::Api::Client.new(
        #     publishable_token: ENV['IEX_API_PUBLISHABLE_TOKEN'],
        #     endpoint: 'https://sandbox.iexapis.com/v1'
        #  )
        client = Alphavantage::Client.new key: ENV['ALPHA_API_KEY']
        stock = client.stock symbol: params[:ticker]
        stock_quote = stock.quote
        user = User.find(params[:user])
        price = stock_quote.price.to_f.round(2)
        # byebug
        total = (price * params[:stock_amount].to_i).round(2)
        if price > 0 && user.wallet - total > 0
            transaction = Transaction.new(user_id: params[:user], ticker: params[:ticker], stock_amount: params[:stock_amount], price: price, total: total)
            if transaction.save
                user.update(wallet: user.wallet - total)
                render json: transaction
            else
                render json: transaction.full_message
            end
        else
            render json: "Invalid"
        end
    
    end
end

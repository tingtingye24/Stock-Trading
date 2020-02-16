class TransactionsController < ApplicationController

    def show
        user = User.find(params[:id])
        transactions = user.transactions
        # newTransaction = Transaction.addCurrentPrice(transactions)
        render json: transactions
    end

    def create
        client = IEX::Api::Client.new(
            publishable_token: ENV['IEX_API_PUBLISHABLE_TOKEN'],
            endpoint: 'https://sandbox.iexapis.com/v1'
        )
        user = User.find(params[:user])
        price = client.price(params[:ticker]).round(2)
        if price
            # byebug
            user.update(wallet: user.wallet - (price * params[:stock_amount].to_i))
            # user.wallet = user.wallet - (price * params[:stock_amount].to_i)
            transaction = Transaction.new(user_id: params[:user], ticker: params[:ticker], stock_amount: params[:stock_amount], price: client.price(params[:ticker])) 
            if transaction.save
                render json: transaction
            else
                render json: transaction.full_message
            end
        else
            render json: "Invalid"
        end
    
    end
end

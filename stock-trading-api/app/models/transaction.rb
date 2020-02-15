class Transaction < ApplicationRecord
    belongs_to :user
    # belongs_to :stock
    
    def self.addCurrentPrice(transactions)
        client = IEX::Api::Client.new(
            publishable_token: ENV['IEX_API_PUBLISHABLE_TOKEN'],
            endpoint: 'https://sandbox.iexapis.com/v1'
        )
        newTransactions = transactions.map do |transaction|
            transaction.update(current_price:  client.price(transaction.ticker))
            transaction
        end
        return newTransactions
    end

end

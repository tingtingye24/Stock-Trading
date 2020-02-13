class StocksController < ApplicationController

    def index
        client = IEX::Api::Client.new(
            publishable_token: ENV['IEX_API_PUBLISHABLE_TOKEN'],
            endpoint: 'https://sandbox.iexapis.com/v1'
        )

        byebug
        
    end

end

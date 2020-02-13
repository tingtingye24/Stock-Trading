class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user
    end

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            render json: user
        else
            render json: {error: "incorrect"}
        end
    end

    def signup
        user = User.new(username: params[:username], password: params[:password_digest])
        if user.save
            render json: user
        else
            render json: user.errors.full_messages
        end
    end

end

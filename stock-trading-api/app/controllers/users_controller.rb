class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user
    end

    def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            render json: user
        else
            render json: user.errors.full_messages
        end
    end

    def signup
        user = User.new(name: params[:name], password: params[:password], email: params[:email])
        if user.save
            render json: user
        else
            render json: user.errors.full_messages
        end
    end

end

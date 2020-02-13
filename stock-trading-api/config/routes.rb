Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :user
  # resources :transactions
  resources :stocks
  resources :users
  resources :transactions

  post "/users/login", to: "users#login"
  post "/users/signup", to: "users#signup"

end

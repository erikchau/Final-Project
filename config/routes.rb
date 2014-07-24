Rails.application.routes.draw do

  root to: 'static_pages#root'

  resource :sessions, only: [:new, :create, :destroy]
  resources :users
end

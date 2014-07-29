Rails.application.routes.draw do

  root to: 'static_pages#root'

  resource :sessions, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

  namespace :api, defaults: { format: :json} do
    resources :users, only: [:show, :index, :update]
    resources :games, only: [:show, :destroy, :index, :create, :update]
    resources :sales, only: [:index, :show, :create, :destroy]
  end

end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :colors, only: [:index] do 
    resources :votes, only: [:create, :destroy]
  end

  resources :users, only: [:new, :create] do
    resources :votes, only: [:index]
  end

  resources :sessions, only: [:new, :create]

  delete "/sessions", to: "sessions#destroy"

  root "colors#index"
end

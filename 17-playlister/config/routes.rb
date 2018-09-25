Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  resources :playlists, only: [:index, :show, :edit]
  resources :songs, only: [:index, :show, :edit]
  resources :playlistings, only: [:new, :create]

end

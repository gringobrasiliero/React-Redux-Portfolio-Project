Rails.application.routes.draw do


  post 'authenticate', to: 'authentication#authenticate'
  post 'login', to: 'users#login'

  resources :categories
  resources :posts
  resources :comments
  resources :users
  resources :posts do
    resources :comments
  end

  resources :categories do
    resources :posts
  end

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
end

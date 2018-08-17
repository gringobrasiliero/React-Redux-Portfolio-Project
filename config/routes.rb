Rails.application.routes.draw do

  resources :categories
  resources :posts
  resources :comments

  resources :posts do
    resources :comments
  end

  resources :categories do
    resources :posts
  end

end

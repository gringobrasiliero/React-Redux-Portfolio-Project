Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

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

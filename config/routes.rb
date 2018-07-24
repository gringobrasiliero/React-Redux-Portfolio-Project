Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :votes

resources :users

resources :posts do
  resources :comments
end

resources :posts do
  resources :votes
end

  resources :categories do
    resources :posts
  end

end

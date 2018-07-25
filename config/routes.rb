Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :votes

resources :users

resources :posts do
  resources :comments
    resources :votes
end



resources :users do
  resources :votes
  resources :comments
end

  resources :categories do
    resources :posts
  end

end

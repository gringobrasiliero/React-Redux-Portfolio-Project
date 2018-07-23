Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


resources :users

resources :posts do
  resources :comments
end

  resources :categories do
    resources :posts
  end

end

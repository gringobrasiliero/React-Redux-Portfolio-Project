Rails.application.routes.draw do

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

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

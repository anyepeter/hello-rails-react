Rails.application.routes.draw do
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'api/greetings'
  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get 'messages', to: 'api#messages'
  end
end

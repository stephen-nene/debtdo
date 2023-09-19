Rails.application.routes.draw do
  resources :debts
  resources :day_tasks

  resources :brain_dumps
  resources :time_frames

  resources :users do 
    resources :debts, only: [:index]
    resources :day_tasks, only: [:index]
  end

  
  get '/me', to: "sessions#show"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  #wuhu
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "application#index"
end

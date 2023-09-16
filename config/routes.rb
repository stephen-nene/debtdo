Rails.application.routes.draw do
  resources :debts
  resources :brain_dumps
  resources :time_frames
  resources :day_tasks
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

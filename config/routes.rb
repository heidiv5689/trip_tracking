Rails.application.routes.draw do
  
  namespace :api do
  resources :users do 
    resources :trips
    end  
    end
  end


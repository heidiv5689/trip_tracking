Rails.application.routes.draw do
  resources :users do 
    resources :trips do
      resources :locations do
        resources :addresses
      end
    end
  end

end

Rails.application.routes.draw do
  resources :fruits, only: [:index, :show]
end

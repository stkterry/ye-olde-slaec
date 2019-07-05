Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]

    resources :channels, only: [:index, :show, :create, :update, :destroy] do
      resources :messages, only: [:index, :show, :create, :update, :destroy]
      resources :subscribers, only: [:show, :create, :destroy]
    end

  end
  root "static_pages#root"
  mount ActionCable.server, at: "/cable"
end

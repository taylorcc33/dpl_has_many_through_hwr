Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :teachers do
      resources :appointments
    end
    resources :students
    resources :appointments

    get "teacher/:id/appointments", to: "teachers#teacher_appointments"
  end

  
end

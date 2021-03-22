Rails.application.routes.draw do
 
  namespace :api do
    resources :teachers do
      resources :appointments
    end
    resources :students
    resources :appointments

    get "teacher/:id/appointments", to: "teachers#teacher_appointments"
  end

end

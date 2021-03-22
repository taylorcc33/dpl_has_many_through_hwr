class Student < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :teachers, through: :appointments
end

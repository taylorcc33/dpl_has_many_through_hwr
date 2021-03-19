class Appointment < ApplicationRecord
  belongs_to :teacher
  belongs_to :student

  def self.all_data
    appointments = Appointment.all
    appointments.map do |appointment|
      { id: appointment.id, date: appointment.date, teacher: appointment.teacher, student: appointment.student }
    end
  end
end

class Teacher < ApplicationRecord
  has_many :appointments
  has_many :students, through: :appointments

  def get_appts
    self.appointments.map do |appt|
      {date: appt.date, students: appt.student}
    end
  end
end

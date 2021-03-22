class Teacher < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :students, through: :appointments

  def get_appts
    self.appointments.map do |appt|
      {id: appt.id, date: appt.date, students: appt.student}
    end
  end
end

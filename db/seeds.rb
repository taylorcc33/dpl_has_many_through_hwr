# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Teacher.create(first_name: 'Taylor', last_name: 'Collins')
Teacher.create(first_name: 'James', last_name: 'Yeates')
Teacher.create(first_name: 'Danielle', last_name: 'Dona')

6.times do 
  student = Student.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)

  2.times do
    Appointment.create(teacher_id: (rand(3)+1), student_id: student.id, date: Faker::Date.between(from: '2021-03-22', to: '2021-04-13'))
  end
end

puts "# of Teachers: #{Teacher.all.length}"
puts "# of Students: #{Student.all.length}"
puts "# of Appointments: #{Appointment.all.length}"

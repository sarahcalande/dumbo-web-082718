require_relative '../config/environment'


puts "Welcome to the Appointment App™"
puts "What doctor are you going to see?"

Doctor.all.each do |doctor|
  puts "#{doctor.name}"
end

doctor_name = gets.chomp

puts "You're here to see #{Doctor.find_by(name: doctor_name )}"

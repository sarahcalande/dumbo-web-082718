
@flatiron = Cult.create(
  name: "Flatiron School",
  description: "Learn // 💙 // Code",
  active: true
)

@we = Cult.create(
  name: "WeWork",
  description: "FRUIT WATER 🍇 🍎 🍊 🍌 🍐 💧",
  active: true
)

@dbc = Cult.create(
  name: "Dev Bootcamp",
  description: "Make Beautiful and Meaningful Things",
  active: false
)

%w(Alex Anthony Hugo Jackie Jordan Kat McKenzie Ruby Santiago Steven Tiff Andy Malcome).each do |student_name|
  Follower.create(
    name: student_name,
    age: 24,
    in_trance: false
  )
end

@teachers = %w(Graham Matt Jane).map do |teacher_name|
  Follower.create(
    name: teacher_name,
    age: teacher_name == "Graham" ? 32 : 24,
    in_trance: true
  )
end

@teachers.each do |follower|
  follower.cults << @flatiron
  follower.cults << @we
  if follower.name == "Graham"
    follower.cults << @dbc
  end
end


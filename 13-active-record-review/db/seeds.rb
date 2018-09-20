BloodOath.destroy_all
Cult.destroy_all
Follower.destroy_all

cults = [  {
    name: "Heaven's Gate",
    location: "CA"
  },
  {
    name: "Jonestown",
    location: "GY"
  },
  {
    name: "Rajnesshees",
    location: "ID"
  },
  {
    name: "Branch Dividians",
    location: "TX"
  }
]

cults.each do |cult_data|
  # for each cult, make a cult
  # for each cult, make 3 followers at that location
  # for each follower, association to given cult (by creating blood oath)

  cult = Cult.create(cult_data)

  3.times do
    # foll = Follower.create(name: Faker::BojackHorseman.character, location: cult_data[:location])
    # BloodOath.create(cult_id: cult.id, follower_id: foll.id)
    cult.followers << Follower.create(name: Faker::BojackHorseman.character, location: cult_data[:location])
  end

end

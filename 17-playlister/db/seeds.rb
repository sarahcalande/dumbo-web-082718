# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

100.times do
  Song.create(name: Faker::BossaNova.song, duration: (0..500).to_a.sample)
end

10.times do
  Playlist.create(name: Faker::Hipster.sentence(3).gsub(".", ""))
end
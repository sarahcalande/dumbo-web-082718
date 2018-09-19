require 'open-uri'
require 'faker'

10.times do
  url = JSON.parse(open("https://dog.ceo/api/breeds/image/random").read)["message"]
  Dog.create({
    name: Faker::Dog.name,
    breed: Faker::Dog.breed,
    age: (0..15).to_a.sample,
    pic: url
  }) 
end

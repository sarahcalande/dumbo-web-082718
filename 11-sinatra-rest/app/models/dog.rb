class Dog < ActiveRecord::Base


  def self.search_by_breed(breed_string)
    self.all.select do |dog|
      dog.breed.include?(breed_string)
    end
  end

end
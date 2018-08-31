require 'pry'

require_relative '../lib/author.rb'
require_relative '../lib/book.rb'

prince = Author.new("Maxcell Prince Wilson", "He really likes corgis")
prince_book = prince.write_book("Corgis", 36)
prince_book = prince.write_book("French Bulldog", 40)
prince_book = prince.write_book("Daschund", 50)

jane = Author.new("Jane", "He really likes cats")
jane_book = jane.write_book("Tabby", 36)
jane_book = jane.write_book("Ragdoll", 40)
jane_book = jane.write_book("Siamese", 50)


#
# puts "Welcome #{prince.name}."
# puts "Bio: \"#{prince.bio}\""
#
# puts "==================="
#
# puts "The book is titled: #{prince_book.title}"
# puts "The book has #{prince_book.pages} pages"
# puts "The book is written by #{prince_book.author.name}"

# puts "Here are ALL the books:"
# Book.all.each do |book|
#   puts "- #{book.title} - #{book.author.name}"
# end

puts "Here are all of the books written by Prince:"
prince.books.each do |book|
  puts "- #{book.title}"
end

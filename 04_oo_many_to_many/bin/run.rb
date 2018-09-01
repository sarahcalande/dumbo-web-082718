require 'pry'

require_relative '../lib/author.rb'
require_relative '../lib/book.rb'
require_relative '../lib/genre.rb'

mystery = Genre.new("Mystery")
thriller = Genre.new("Thriller")
scifi = Genre.new("Science Fiction")
nonfiction = Genre.new("Non-fiction")

prince = Author.new("Maxcell Prince Wilson", "He really likes corgis")
prince_book = prince.write_book("Corgis", 36, mystery)
prince_book = prince.write_book("French Bulldog", 40, scifi)
prince_book = prince.write_book("Daschund", 50, scifi)

jane = Author.new("Jane", "He really likes cats")
jane_book = jane.write_book("Tabby", 36,thriller)
jane_book = jane.write_book("Ragdoll", 40, nonfiction)
jane_book = jane.write_book("Siamese", 50, nonfiction)

binding.pry
0


# I want to find all of the books that are over
# a certain number of pages (given from the user)


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

# puts "Here are all of the books written by Prince:"
# prince.books.each do |book|
#   puts "- #{book.title}"
# end

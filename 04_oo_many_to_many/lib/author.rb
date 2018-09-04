
class Author

  attr_reader :name, :bio
  # attr_writer :name
  # attr_accessor :name

  # When I create a new author
  # I want them to have a name and a bio
  def initialize(name, bio)
    @name = name # Instance Variable
    @bio = bio
  end

  # prince.write_book("Title", 36)
  def write_book(title, pages, genre)
    # To write a book
    # In order to do so, I need all of the pieces of data to make a book
    # binding.pry
    new_book = Book.new(title, pages, self, genre)
    # Single Source of Truth
    # binding.pry
    new_book
  end

  def books
    # Getting all of the books
    # Iterating over and selecting the ones that were written by me
    Book.all.select do |book|
      book.author == self
    end
  end


  def genres
    # I want all of the genres that this author has written for
    # I have to find all of the books I have written
    # From there, I want to be able to see each of their genres
    self.books.map do |book|
      book.genre
    end
  end

  def book_titles
  # Return an array of all title strings for books
    self.books.map do |book|
      book.title
    end
  end


  # Attribute Reader (Longhand)
  # def name
  #   @name
  # end

  # def name=(new_name)
  # @name = new_name
  #end
end

class Genre
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def books
    # All the books that belong to this genre
    Book.all.select do |book|
      # Something that is true
      book.genre == self
    end
  end

  def authors
    # I want to see all of the authors that have written in
    # this genre
    books.map do |book|
      book.author
    end
  end
end

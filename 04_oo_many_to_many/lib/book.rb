# Class called book
# Attributes are: title, pages, author
class Book
  attr_reader :title, :pages, :author, :genre

  @@all = []

  def initialize(title, pages, author, genre)
    @title = title
    @pages = pages
    @author = author
    @genre = genre

    @@all << self
  end

  def self.all
    @@all
  end



  # I want to find all of the books that are over
  # a certain number of pages (given from the user)
  def self.find_over(num_pages)
    # Data type returned: Array of Books

    # Steps to make this happen
    # 0. Get the user input (num_pages)
    # 1. Get all the books
    # 2. Iterate through all the books
    # 3. Find when the pages numbers exceed (greater than)
    # 4. Return the books
    # found_books = @@all.select do |book|
    #   book.pages > num_pages
    # end
    #
    # found_books.map do |book|
    #   book.title
    # end

    @@all.select do |book|
      book.pages > num_pages
    end.map do |book|
      book.title
    end
  end






end

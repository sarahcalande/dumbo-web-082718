# Class called book
# Attributes are: title, pages, author
class Book
  attr_reader :title, :pages, :author

  @@all = []

  def initialize(title, pages, author)
    @title = title
    @pages = pages
    @author = author

    @@all << self
  end

  def self.all
    @@all
  end
end

class Cat < ApplicationRecord

  # validates_uniqueness_of :name, message: "help I'm trapped in an activerecord factory"
  # validates :name, { presence: true}, message: "help I'm trapped in an activerecord factory"
  validates :fluffiness, numericality: { less_than_or_equal_to: 10 }
  validates :birth_year, numericality: { 
                                          greater_than: 0, 
                                          only_integer: true,
                                          less_than_or_equal_to: DateTime.now.year }
end
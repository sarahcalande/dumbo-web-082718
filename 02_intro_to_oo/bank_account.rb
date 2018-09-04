require 'pry'


# prince_account = { amount: 10.0, type: "Savings", name: "Prince" }
# jane_account = { amount: 10000.0, type: "Savings", name: "Jane" }
# helen_account = { amount: 100000000.0, type: "Savings", namee: "Helen"}
#
# puts "Here's the amount in #{prince_account[:name]}'s #{prince_account[:type]} account: $#{prince_account[:amount]}"
# puts "Here's the amount in #{jane_account[:name]}'s #{jane_account[:type]} account: $#{jane_account[:amount]}"
# puts "Here's the amount in #{helen_account[:name]}'s #{helen_account[:type]} account: $#{helen_account[:amount]}"

class BankAccount
  attr_accessor :amount, :type, :name
  # attr_reader :amount, :type, :name
  # attr_writer :amount, :type, :name

  @@bank_name = "Flatiron Bank"

  def initialize(amount, type, name)
    @amount = amount
    @type = type
    @name = name
    puts "Here's the amount: #{@amount}"
    puts "Here's the type: #{@type}"
    puts "Here's the name: #{@name}"
  end

  # Class Method
  # Denoted by self in front
  def self.whoami
    puts "Oh I am #{self}"
  end

  def self.bank_name
    @@bank_name
  end

  puts "Here in the class, self is: #{self}"

  # Instance Method -> It has to be called on an instance
  def deposit(monies)
    puts "This is the value of self's amount: #{self.amount}"

    # Explicit self and the implicit self
    self.amount += monies

    # Explicitly calling self
    # self.amount = self.amount + monies
    # @amount += monies
    # self.amount = self.amount + monies Only can be called when an attribute reader/writer exists
    # @amount = @amount + monies
  end

  # How would I write a method to withdraw money
  def withdraw(monies)
    @amount -= monies
  end

  #  prince_account.type => "Checking"
  # Instance method => Attribute Reader
  # Reads the attribute that matches that name
  # def type
  #   puts "Wow this a cool method"
  # end
  #
  # def name
  #   @name
  # end

  # Attribute Writer
  # It can ONLY change the attribute
  # def amount=(monies)
  #   @amount = monies
  # end
  #
  # def type=(type)
  #   @type = type
  # end
  #
  # def name=(name)
  #   @name = name
  # end






end

binding.pry
0

class Animal

  def alive
    true
  end
end


class Mammal < Animal

  def warm_blooded
    true
  end
end


class Dog < Mammal

  def initialize(name)

    @name = name
  end

  def barks
    'woof'
  end
end

dog = Dog.new('Fido')
# lookup chain
# if method not found on instance, look to parent
dog.barks
dog.warm_blooded
dog.alive

# new is creating an empty instance
# calling initialize on that empty instance






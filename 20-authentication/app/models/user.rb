class User < ApplicationRecord
  has_many :votes

  validates_uniqueness_of :username

  # #@user.password = "foo"
  # def password=(value)
  #   self.password_digest = BCrypt::Password.create(value) 
  # end


  # def authenticate(plaintext_password)
  #   BCrypt::Password.new(self.password_digest) == plaintext_password
  # end

  has_secure_password # <<<---- this one line replaces all this ^^^

  def can_vote?
    remaining_votes > 0
  end

  def remaining_votes
    minutes_since_created.floor - self.votes.count + 5
  end

  def next_vote_available_minutes
    minutes_since_created % 1
  end

  private

  def minutes_since_created
    (Time.now.utc - self.created_at) / 60
  end
end

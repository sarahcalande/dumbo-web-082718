class User < ApplicationRecord
  has_many :votes

  def can_vote?
    remaining_votes > 0
  end

  def remaining_votes
    5 - self.votes.count
  end
end

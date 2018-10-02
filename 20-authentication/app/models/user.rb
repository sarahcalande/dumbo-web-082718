class User < ApplicationRecord
  has_many :votes

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

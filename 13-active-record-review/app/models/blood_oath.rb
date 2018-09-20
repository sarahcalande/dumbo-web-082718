class BloodOath < ActiveRecord::Base
  belongs_to :follower
  belongs_to :cult
end

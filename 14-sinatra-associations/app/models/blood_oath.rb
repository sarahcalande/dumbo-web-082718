class BloodOath < ActiveRecord::Base
  belongs_to :cult
  belongs_to :follower
end
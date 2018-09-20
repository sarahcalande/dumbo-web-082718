class Follower < ActiveRecord::Base
  has_many :blood_oaths
  has_many :cults, through: :blood_oaths
end

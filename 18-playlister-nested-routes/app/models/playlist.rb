class Playlist < ApplicationRecord
  has_many :playlistings
  has_many :songs, through: :playlistings
end

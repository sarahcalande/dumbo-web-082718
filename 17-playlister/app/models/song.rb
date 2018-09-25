class Song < ApplicationRecord
  has_many :playlistings
  has_many :playlists, through: :playlistings
end

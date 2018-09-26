class CreatePlaylistings < ActiveRecord::Migration[5.2]
  def change
    create_table :playlistings do |t|
      # t.integer :playlist_id 
      # t.integer :song_id

      t.references :playlist
      t.references :song

      t.timestamps
    end
  end
end

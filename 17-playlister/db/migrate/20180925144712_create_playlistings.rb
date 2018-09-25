class CreatePlaylistings < ActiveRecord::Migration[5.2]
  def change
    create_table :playlistings do |t|

      t.timestamps
    end
  end
end

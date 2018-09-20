class CreateCults < ActiveRecord::Migration
  def change
    create_table :cults do |t|
      t.string :name
      t.string :location
    end
  end
end

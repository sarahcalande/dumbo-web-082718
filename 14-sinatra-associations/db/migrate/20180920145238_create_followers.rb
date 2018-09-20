class CreateFollowers < ActiveRecord::Migration
  def change
    create_table :followers do |table|
      table.string :name
      table.integer :age
      table.boolean :in_trance
    end
  end
end

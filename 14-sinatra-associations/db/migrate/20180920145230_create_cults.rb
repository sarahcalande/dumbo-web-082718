class CreateCults < ActiveRecord::Migration
  def change
    create_table :cults do |table|
      table.string :name
      table.string :description
      table.boolean :active
    end
  end
end

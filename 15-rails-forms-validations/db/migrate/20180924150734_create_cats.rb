class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.integer :fluffiness
      t.integer :birth_year
    end
  end
end

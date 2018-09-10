class CreateDoctors < ActiveRecord::Migration[5.0]
  def change
    # Describe the changes to creating a table
    # called doctors

    create_table :doctors do |t| #table helper
      t.string :name
      t.string :doctor_type
      t.integer :years_exp
    end
  end
end

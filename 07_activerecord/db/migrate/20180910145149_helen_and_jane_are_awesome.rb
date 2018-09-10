class HelenAndJaneAreAwesome < ActiveRecord::Migration[5.0]
  def change
    create_table :appointments do |t|
      t.integer :doctor_id
      t.integer :patient_id
      t.string :date
    end
  end
end

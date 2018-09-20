class CreateBloodOaths < ActiveRecord::Migration
  def change
    create_table :blood_oaths do |table|
      table.references :cult
      table.references :follower
      table.boolean :happened_at_full_moon
    end
  end
end

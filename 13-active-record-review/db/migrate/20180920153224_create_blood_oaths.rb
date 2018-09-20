class CreateBloodOaths < ActiveRecord::Migration
  def change
    create_table :blood_oaths do |t|
      t.integer :follower_id
      t.integer :cult_id
    end
  end
end

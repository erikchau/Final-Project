class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.integer :game_id, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end
  end
end

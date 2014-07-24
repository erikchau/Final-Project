class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :console, null: false
      t.text :comments
      t.integer :price, null: false
      t.string :condition, null: false
      t.text :img_url
      t.boolean :sold, default: false

      t.timestamps
    end

    add_index :games, :user_id
    add_index :games, :title
    add_index :games, :console
  end
end

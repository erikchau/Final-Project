class AddIndexToGames < ActiveRecord::Migration
  def change
    add_index :games, :id
  end
end

class DropImgUrlCol < ActiveRecord::Migration
  def change
    remove_column :games, :img_url
    add_column :games, :api_id, :text
    add_index :games, :api_id
  end
end

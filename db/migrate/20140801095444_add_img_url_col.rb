class AddImgUrlCol < ActiveRecord::Migration
  def change
    add_column :games, :thumb_url, :text, default: 'http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg'
  end
end

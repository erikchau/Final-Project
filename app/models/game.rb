# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string(255)      not null
#  console    :string(255)      not null
#  comments   :text
#  price      :integer          not null
#  condition  :string(255)      not null
#  sold       :boolean          default(FALSE)
#  created_at :datetime
#  updated_at :datetime
#  api_id     :text
#  thumb_url  :text             default("http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg")
#

class Game < ActiveRecord::Base
  
  default_scope {order('id ASC')}

  belongs_to :user
  
  has_one :sale
  
  has_one :buyer, 
  through: :sale,
  source: :buyer

  validates :user_id, :title, :console, :price, :condition, :api_id, :thumb_url, presence: true
  validates :price, numericality: true

end

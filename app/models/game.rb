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
#

class Game < ActiveRecord::Base
  
  default_scope {order('id ASC')}

  CONSOLES = ['PS4', 'PS3', '360', 'XBOne', 'Wii', 'Wii U', 'PSP', 'Vita', 'DS', '3DS', 'Other']
  CONDITIONS = ['Brand New', 'Like New', 'Very Good', 'Good', 'Acceptable']

  belongs_to :user
  
  has_one :sale
  
  has_one :buyer, 
  through: :sale,
  source: :buyer

  validates :user_id, :title, :console, :price, :condition, :api_id, presence: true
  validates :console, inclusion: CONSOLES
  validates :condition, inclusion: CONDITIONS
  validates :price, numericality: true

end

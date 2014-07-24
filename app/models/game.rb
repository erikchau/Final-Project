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
#  img_url    :text
#  sold       :boolean          default(FALSE), not null
#  created_at :datetime
#  updated_at :datetime
#

class Game < ActiveRecord::Base

  CONSOLES = ['Playstation 4', 'Playstation 3', 'Xbox 360', 'Xbox One', 'Wii', 'Wii U', 'PSP', 'PSP Vita', 'Nintendo DS', 'Nintendo 3DS']
  CONDITIONS = ['Brand New', 'Like New', 'Very Good', 'Good', 'Acceptable']

  belongs_to :user

  validates :user_id, :title, :console, :price, :condition, :sold, presence: true
  validates :console, inclusion: CONSOLES
  validates :condition, inclusion: CONDITIONS
  validates :price, numericality: true

end

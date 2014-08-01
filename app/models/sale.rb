# == Schema Information
#
# Table name: sales
#
#  id         :integer          not null, primary key
#  game_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Sale < ActiveRecord::Base
  
  default_scope {order('id ASC')}
  
  belongs_to :buyer,
  foreign_key: :user_id,
  class_name: 'User'
  
  belongs_to :game
end

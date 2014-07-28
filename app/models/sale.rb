class Sale < ActiveRecord::Base
  
  default_scope {order('id ASC')}
  
  belongs_to :buyer,
  foreign_key: :user_id,
  class_name: 'User'
  
  belongs_to :game
end

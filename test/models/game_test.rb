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

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  username      :string(255)      not null
#  password_hash :string(255)      not null
#  session_token :string(255)      not null
#  coins         :integer          default(0), not null
#  created_at    :datetime
#  updated_at    :datetime
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: {minimum: 6}, on: :create
  validates :password_hash, presence: true
  before_validation :set_session_token

  def password=(password)
    if password.present?
      @password = password
      self.password_hash = BCrypt::Password.create(password)
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_hash).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user.try(:is_password?, password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def set_session_token
    self.session_token = self.class.generate_session_token
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end




end

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  icon_url        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :email, format: { with: VALID_EMAIL_REGEX, message: "Invalid"}
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token  
  attr_reader :password

  has_many :messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :author_id
  
  has_many :created_channels,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :created_by
  
  has_many :subscriptions,
    class_name: :Subscriber,
    primary_key: :id,
    foreign_key: :user_id

  has_many :subscribed_channels,
    through: :subscriptions,
    source: :channel

  has_many :reactions,
    class_name: :Reaction,
    primary_key: :id,
    foreign_key: :author_id;


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user: nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

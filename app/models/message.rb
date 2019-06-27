# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  thread_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord

  validates :body, presence: true

  belongs_to :channel,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :channel_id
  
  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
  
  belongs_to :thread,
    class_name: :Thread,
    primary_key: :id,
    foreign_key: :thread_id,
    optional: :true

  has_many :replies,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :thread_id

  has_many :reactions,
    class_name: :Reaction,
    primary_key: :id,
    foreign_key: :message_id;

end

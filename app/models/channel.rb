# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_by :integer          not null
#  purpose    :string
#  topic      :string
#  is_dm      :boolean          default(FALSE), not null
#  is_private :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Channel < ApplicationRecord

  validates :name, presence: true
  validates :is_dm, :is_private, inclusion: { in: [true, false] }

  belongs_to :creator, 
    class_name: :User,
    primary_key: :id,
    foreign_key: :created_by

  has_many :messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :channel_id

  has_many :subscribers,
    class_name: :Subscriber,
    primary_key: :id,
    foreign_key: :channel_id

  has_many :users,
    through: :subscribers,
    source: :user


end

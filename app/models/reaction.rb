# == Schema Information
#
# Table name: reactions
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  message_id :integer          not null
#



class Reaction < ApplicationRecord

  validates :body, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :message,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :user_id

end

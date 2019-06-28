# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Message.destroy_all
Subscriber.destroy_all

demo_user = User.create!(username: "DemoUser", password: "password", email: "demo@user.com")
heckus = User.create!(username: "Heckus Redeckis", password: "password", email:"a@b.com")
hektor = User.create!(username: "Hektor Correktor", password: "password", email:"c@d.com")
szczepan = User.create!(username: "Szczepan", password: "password", email:"one@two.com")

general = Channel.create!(name: "general", purpose: "General Discussion", created_by: szczepan.id, is_dm: false, is_private: false)

channel_one = Channel.create!(name: "Lamplighters Unite!", created_by: szczepan.id, is_dm: false, is_private: false)
channel_two = Channel.create!(name: "Tesla Fanboys", created_by: heckus.id, is_dm: false, is_private: false, purpose: "To spread the gospel of Tesla")

message_one = Message.create!(body:"Tesla Rules!", channel_id: channel_two.id, author_id: heckus.id)

subscriber_one = Subscriber.create!(user_id: heckus.id, channel_id: channel_two.id)

subscriber_general_1 = Subscriber.create!(user_id: demo_user.id, channel_id: general.id)
subscriber_general_2 = Subscriber.create!(user_id: heckus.id, channel_id: general.id)
subscriber_general_3 = Subscriber.create!(user_id: hektor.id, channel_id: general.id)
subscriber_general_4 = Subscriber.create!(user_id: szczepan.id, channel_id: general.id)

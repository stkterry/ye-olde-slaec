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
channel_two = Channel.create!(name: "Tesla Fanboys", created_by: heckus.id, is_dm: false, is_private: false, purpose: "To spread the gospel of Nick Tesla", topic: "No Edison lovers pls")

message_one = Message.create!(body:"Tesla Rules!", channel_id: channel_two.id, author_id: heckus.id)

message_two = Message.create!(body:"This chat sure is general.", channel_id: general.id, author_id: demo_user.id)

message_three = Message.create!(body:"Yep.", channel_id: general.id, author_id: heckus.id)
message_four = Message.create!(body:"Really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really long message", channel_id: general.id, author_id: hektor.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)
Message.create!(body:"Lots a messages", channel_id: general.id, author_id: heckus.id)


subscriber_one = Subscriber.create!(user_id: heckus.id, channel_id: channel_two.id)
subscriber_two = Subscriber.create!(user_id: hektor.id, channel_id: channel_two.id)

subscriber_general_1 = Subscriber.create!(user_id: demo_user.id, channel_id: general.id)
subscriber_general_2 = Subscriber.create!(user_id: heckus.id, channel_id: general.id)
subscriber_general_3 = Subscriber.create!(user_id: hektor.id, channel_id: general.id)
subscriber_general_4 = Subscriber.create!(user_id: szczepan.id, channel_id: general.id)

# Direct messages temp

dm_one = Channel.create!(name:"fake message", created_by: demo_user.id, is_dm: true, is_private: true)
dm_message_one = Message.create!(body: "Oh no", channel_id: dm_one.id, author_id: demo_user.id)
subscriber_three = Subscriber.create!(user_id: szczepan.id, channel_id: dm_one.id)
subscriber_four = Subscriber.create!(user_id: demo_user.id, channel_id: dm_one.id)
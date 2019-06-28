json.channel do
  json.partial! "/api/channels/channel", channel: @channel
end

json.users do
  @channel.users.each do |user|
    json.set! user.id do
      json.set! user.id do
        json.partial! "/api/users/user", user: user
      end
    end
  end
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.partial! "/api/messages/message", message: message
    end
  end
end

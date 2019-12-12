class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_for "chat_channel"
    load
  end

  def speak(data)
    
    channel = Channel.find_by(id: data['channel_id'])

    message = channel.messages.create(
      body: data['message'], 
      author_id: data['author_id'],
      channel_id: data['channel_id'])
    

    socket = { type: "message", message: message }
    ChatChannel.broadcast_to("chat_channel", socket)
    load
  end

  def load
    messages = Message.all
    socket = { type: "messages", messages: messages }
    ChatChannel.broadcast_to("chat_channel", socket)
  end

  def usubscribed
    stop_all_streams
  end

end
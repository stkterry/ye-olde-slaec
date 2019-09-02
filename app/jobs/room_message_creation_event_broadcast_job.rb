class RoomMessageCreationEventBroadcastJob 
< ApplicationJob
  queue_as :default

  def perform(room_message)
    ActionCable
      .server
      .broadcast(
        'room_channel',
        id: chat_message.id,
        created_at: room_message.created_at.strftime('%H:%M'),
        content: room_message.content
      )
  end
end
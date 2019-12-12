class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room_channel"
  end

  def create(opts)
    RoomMessage.create(content: opts.fetch('content'))
  end
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

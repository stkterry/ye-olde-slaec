

class Api::SubscribersController < ApplicationController

  def show
    @subscriber = Subscriber.find_by(id: params[:id])
    render :show
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)
    @channel = Channel.find_by(id: params[:channel_id])

    if @subscriber.save
      render "/api/channels/show.json.jbuilder"
    else
      render @subscriber.errors.full_messages, status: 401
    end
  end

  def destroy
    @subscriber = Subscriber.find_by(user_id: current_user.id, channel_id: params[:channel_id])
    @channel = Channel.find_by(id: params[:channel_id])


    if @subscriber
      Message.where(author: current_user.id).find_each do |message|
        message.destroy
      end
      @subscriber.destroy
      render "/api/channels/show.json.jbuilder"
    else
      render json: ["You're not a subscriber!"], status: 401
    end
  end

  private def subscriber_params
    params.require(:subscriber).permit(:user_id, :channel_id)
  end

end
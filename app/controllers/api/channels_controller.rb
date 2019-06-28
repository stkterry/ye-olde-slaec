class Api::ChannelsController < ApplicationController

  # before_action :required_login

  def index
    @channels = Channel.all.includes(:users, :messages)
    render :index
  end

  def show
    @channel = Channel.includes(:users, :messages).find_by(id: params[:id])
    render :show
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.is_dm
      name = @channel.subscriber_ids.map { |id| User.find_by(id: id).username }.join(", ")
      @channel.name = name
    end

    if @channel.save
      [current_user.id].concat(@channel.subscriber_ids || []).each do |subscriber|
        Subscriber.create(user_id: subscriber.id, channel_id: @channel.id)
      end

    else
      render json: @channel.errors.full_messages, status: 422
    end

  end

  def update
    @channel = Channel.includes(:users, :messages).find_by(id: params[:id])

    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    if @channel.created_by == current_user.id || (@channel.is_dm && @channel.users.find_by(id: current_user.id))
      @channel.destroy
      render json: params[:id]
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private def channel_params
    params.require(:channel).permit(:name, :created_by, :purpose, :topic, :is_dm, :is_private, :subscriber_ids)
  end


end
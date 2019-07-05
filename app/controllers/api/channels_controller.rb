class Api::ChannelsController < ApplicationController

  # before_action :required_login

  def index
    @channels = Channel.all.includes(:users, :messages)
    render :index
  end

  def show
    @channel = Channel.includes(:users, :messages).find_by(id: params[:id])
    # puts @channel.users
    render :show
  end

  def create
    new_params = channel_params.except(:user_ids)
    @channel = Channel.new(new_params)

    # if @channel.is_dm
    #   name = @channel.user_ids.map { |id| User.find_by(id: id).username }.join(", ")
    #   @channel.name = name
    # end
    
    if @channel.save

      if channel_params[:user_ids].empty?
        user_ids = [current_user.id].to_i
      else
        user_ids = channel_params[:user_ids].map { |user_id| user_id.to_i }
      end
      
      user_ids.each do |user_id|
        Subscriber.create(user_id: user_id, channel_id: @channel.id)
      end

      render :show
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
    params.require(:channel).permit(:name, :created_by, :purpose, :topic, :is_dm, :is_private, user_ids: [])
  end


end
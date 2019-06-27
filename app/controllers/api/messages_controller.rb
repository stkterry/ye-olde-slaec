
class Api::MessagesController < ApplicationController

  before_action :require_login

  def index
    @messages = Message.all.includes(:user)
    render :index
  end

  def show
    @message = Message.includes(:user).find_by(id: params[:id])
    render :show
  end

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = Message.find_by(id: params[:id])

    if @message.update(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find_by(id: params[id])
    @message.destroy
    render :index
  end

  private def message_params
    params.require(:message).permit(:body, :author_id, :channel_id, :thread_id = nil)
  end


end
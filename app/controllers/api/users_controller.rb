class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)

    @user.username = @user.email
    if @user.save
      login(@user)
      render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])

    if @user.destroy
      # render :index
    else
      render json: @user.errors.full_message, status: 422
    end
  end

  private def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
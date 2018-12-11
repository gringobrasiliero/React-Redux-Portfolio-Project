class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    json_response(@users)
  end

  def new
    @user = User.new
    json_response(@user)

  end

  def create
    @user = User.create!(user_params)
  json_response(@user, :created)
  end

  def show
    json_response(@user)
  end

  def destroy
    @user.destroy
    head :no_content
  end

  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      json_response(username: @user.username, token: @user.token)
  end
  end


  private

  def user_params
    params.permit(:email, :username, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end


end

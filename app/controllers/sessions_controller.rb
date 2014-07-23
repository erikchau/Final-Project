class SessionsController < ApplicationController

  before_action :require_signed_out, only: [:new, :create]
  before_action :requre_signed_in, only: [:destroy]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ['invalid username and/or password']
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end


  def user_params
    params.require(:user).permit(:username, :password)
  end

end

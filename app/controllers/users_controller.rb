class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.new(user_params)
    debugger
    if user.save
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = user.errors.full_messages
      render :new
    end
  end


  def show
  end

  def index
  end




  def user_params
      params.require(:user).permit(:username, :password)
  end

end

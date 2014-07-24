module Api
  class UsersController < ApiController
   
    def show
      @user = User.find(params[:id])
      debugger
      render json: @user
    end
  
  
  
  
  end
end
module Api
  class UsersController < ApiController
   
    def show
      @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: ['This member does not exist'], status: :unprocessable_entity
      end
    end
  
  
  
  
  end
end
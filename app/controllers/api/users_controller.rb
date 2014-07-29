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
  
    def index
      @users = User.all
      render :index
    end
  
    def update
      if user_params[:coins]
        new_coins = current_user.add_coins(user_params[:coins].to_i)
        @current_user.update_attributes(coins: new_coins)
        @user = current_user
        render :show
      end
    end
    
    def user_params
      params.require(:user).permit(:coins)
    end
  
  
  end
end
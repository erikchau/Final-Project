module Api
  class GamesController < ApiController
  
    def index
      if params[:dashboard]
        @games = Game.where(user_id: current_user.id).concat(current_user.bought_games)
        render :index
      elsif params[:user_id]
        @games = Game.where(user_id: params[:user_id])
        render :index
      elsif params[:api_id]
        @games = Game.where(api_id: params[:api_id], sold: false)
        render :index
      else
        @games = Game.where(sold: false)
        render :index
      end
    end
    
    def show
      puts params[:id]
      @games = Game.where(api_id: params[:id])
      puts @games
      render :index
    end
    
    def destroy
      # MAKE ME GO BOOOOOOOOOM BABY
    end
    
    def create
      @game = current_user.games.new(game_params)
      if @game.save
        render :show
      else
        render json: flash.now[:errors] = @game.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def update
      @game = Game.find(params[:id])
      if @game.update_attributes(game_params)
        render :show
      else
        render :json => @todo.errors, :status => :unprocessable_entity
      end
    end
  
  
  
  
    private
    
    def game_params
      params.require(:game).permit(:title, :console, :comments, :price, :condition, :sold, :api_id, :thumb_url)
    end
  
  end
end
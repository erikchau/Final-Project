module Api
  class GamesController < ApiController
  
    def index
      @games = Game.all
      render :index
    end
    
    def show
      @game = Game.find(params[:id])
      render :show
    end
    
    def destroy
      # MAKE ME GO BOOOOOOOOOM BABY
    end
    
    def create
      @game = current_user.games.new(game_params)
      if @game.save
        render :show
      else
        render json: @game.errors.full_messages, status: :unprocessable_entity
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
      params.require(:game).permit(:title, :console, :comments, :price, :condition, :sold)
    end
  
  end
end
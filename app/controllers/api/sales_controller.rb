module Api
  class SalesController < ApiController
  
    def create
      sale = current_user.buys.new(sale_params)
      sold_game = Game.find(sale_params[:game_id])
      sold_game.sold = true
      sold_game.save!
      sale.save!
      render sold_game
    end
  
    def sale_params
      params.require(:sale).permit(:game_id)
    end
  
  end
end
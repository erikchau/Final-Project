module Api
  class SalesController < ApiController
  
    def create
      sale = current_user.buys.new(sale_params)
      sold_game = Game.find(sale_params[:game_id])
      if sold_game.price > current_user.coins
        render json: ['You cannot afford this game! Buy more coins!'], status: :not_acceptable
      else
        sold_game.sold = true
        sold_game.save!
        sale.save!
        coins = current_user.subtract_coins(sold_game.price)
        current_user.update_attributes(coins: coins)
        render sold_game
      end
    end
  
    def sale_params
      params.require(:sale).permit(:game_id)
    end
  
  end
end
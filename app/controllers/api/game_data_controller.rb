require 'addressable/uri'
require 'rest-client'
module Api
  class GameDataController < ApiController
    
    def index
      url = Addressable::URI.new(
      scheme: 'http',
      host: 'www.giantbomb.com',
      path: 'api/search',
      query_values: {
        api_key: ENV['giant_bomb_key'],
        format: 'json',
        query: params[:query],
        resources: 'game',
        field_list: 'name,description,id,image,platforms'
      }).to_s
      
      data = RestClient.get(url)
      game_data = JSON.parse(data)
      
      render json: game_data['results']
    end
    
    
    def show
      url = Addressable::URI.new(
      scheme: 'http',
      host: 'www.giantbomb.com',
      path: 'api/game/' + params[:id],
      query_values: {
        api_key: ENV['giant_bomb_key'],
        format: 'json',
        query: params[:query],
        resources: 'game',
        field_list: 'name,description,id,image,platforms,deck'
      }).to_s
      
      data = RestClient.get(url)
      game_data = JSON.parse(data)
      
      render json: game_data['results']
    end
    
  end
end


json.extract! user, :id, :username, :coins, :created_at, :updated_at

json.games user.games do |game|
  json.id game.id
  json.title game.title
  json.console game.console
  json.comments game.comments
  json.price game.price
  json.condition game.condition
  json.api_id game.api_id
  json.sold game.sold
end

json.bought_games user.bought_games do |buy|
  json.id buy.id
  json.title buy.title
  json.console buy.console
  json.comments buy.comments
  json.price buy.price
  json.condition buy.condition
  json.api_id buy.api_id
  json.sold buy.sold
end


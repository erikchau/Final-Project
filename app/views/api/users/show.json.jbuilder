json.extract! @user, :id, :username, :coins, :created_at, :updated_at

json.games @user.games do |game|
  json.id game.id
  json.title game.title
  json.console game.console
  json.comments game.comments
  json.price game.price
  json.condition game.condition
  json.img_url game.img_url
  json.sold game.sold
end
  

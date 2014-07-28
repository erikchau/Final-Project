json.(game, :id,
            :user_id,
            :title, 
            :console,
            :comments,
            :price,
            :condition,
            :api_id,
            :sold,
            :created_at, 
            :updated_at
)

json.user do
  json.username game.user.username
  json.id game.user.id
end





FinalProject.Collections.Games = Backbone.Collection.extend({
  
  url: 'api/games',
  
  model: FinalProject.Models.Game,
  
  getOrFetch: function(id){
    var games = this;
    
    var game;
    if ( game = this.get(id) ) {
      game.fetch();
    } else {
      game = new FinalProject.Models.Game({id: id})
      game.fetch({
        success: function(){ games.add(game) }
      });
    }
    return game;
  }
  
  
});

FinalProject.Collections.games = new FinalProject.Collections.Games
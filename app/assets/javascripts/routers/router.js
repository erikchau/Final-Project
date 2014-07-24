FinalProject.Routers.AppRouter = Backbone.Router.extend({
  
  routes:{
    'dashboard': 'dashboard',
    'browse': 'browse',
    'games/:id': 'gameShow',
    'sell': 'sellGames'
  }
  
  
  
  
  swapViews: function(view){
    
  }
  
  
  
})
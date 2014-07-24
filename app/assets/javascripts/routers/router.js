FinalProject.Routers.AppRouter = Backbone.Router.extend({
  
  routes:{
    '': 'dashboard',
    'browse': 'browse',
    'games/:id': 'gameShow',
    'sell': 'sellGames'
  },
  
  dashboard: function(){
    dashboardView = new FinalProject.Views.Dashboard;
    this.swapView(dashboardView);
  },
  
  sellGames: function(){
    sellView = new FinalProject.Views.Sell;
    this.swapView(sellView);
  },
  
  
  
  
  swapView: function(view){
    if(this.currentView){
      this.currentView.remove()
    }
    
    $('.content').html(view.render().$el)
    this.currentView = view
  }
  
  
  
})
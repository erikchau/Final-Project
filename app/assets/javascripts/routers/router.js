FinalProject.Routers.AppRouter = Backbone.Router.extend({
  
  routes:{
    '': 'dashboard',
    'games': 'browse',
    'games/:id': 'gameShow',
    'sell': 'sellGames'
  },
  
  dashboard: function(){
    var dashboardView = new FinalProject.Views.Dashboard;
    this.swapView(dashboardView);
  },
  
  sellGames: function(){
    var sellView = new FinalProject.Views.Sell;
    this.swapView(sellView);
  },
  
  browse: function(){
    FinalProject.Collections.games.fetch();
    var browseView = new FinalProject.Views.Browse({collection: FinalProject.Collections.games})
    this.swapView(browseView);
  },
  
  gameShow: function(id){
    var model = FinalProject.Collections.games.getOrFetch(id);
    var showView = new FinalProject.Views.GameShow({model: model});
    this.swapView(showView);
  },
  
  
  
  swapView: function(view){
    if(this.currentView){
      this.currentView.remove()
    }
    
    $('.content').html(view.render().$el)
    this.currentView = view
  }
  
  
  
})
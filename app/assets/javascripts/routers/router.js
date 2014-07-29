FinalProject.Routers.AppRouter = Backbone.Router.extend({
  
  routes:{
    '': 'dashboard',
    'games': 'browse',
    'games/:id': 'gameShow',
    'sell': 'sellGames',
    'purchased': 'purchased'
    
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
    var game = FinalProject.Collections.games.getOrFetch(id);
    var showView = new FinalProject.Views.GameShow({model: game})
    this.swapView(showView);
  },
  
  purchased: function(){
    var purchaseView = new FinalProject.Views.Purchased
    this.swapView(purchaseView);
  },
  
  swapView: function(view){
    if(this.currentView){
      this.currentView.remove()
    }
    
    $('.content').html(view.render().$el)
    this.currentView = view
  }
  
  
  
})
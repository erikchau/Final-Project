FinalProject.Routers.AppRouter = Backbone.Router.extend({
  
  routes:{
    '': 'dashboard',
    'games': 'browse',
    'games/:id': 'gameShow',
    'user/:id': 'userShow',
    'search/:query': 'search',
    'sell': 'sellGames',
    'purchased': 'purchased'
  },
  
  dashboard: function(){
    var games = new FinalProject.Collections.Games
    games.fetch({data: {dashboard: true}})
    var dashboardView = new FinalProject.Views.Dashboard({collection: games});
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
    var game = new FinalProject.Models.GameData({id: id});
    game.fetch();
    var listings = new FinalProject.Collections.Games();
    listings.fetch({data: {api_id: id}});
    var showView = new FinalProject.Views.GameShow({model: game, collection: listings})
    this.swapView(showView);
  },
  
  purchased: function(){
    var purchaseView = new FinalProject.Views.Purchased;
    this.swapView(purchaseView);
  },
  
  userShow: function(id){
    var user = FinalProject.Collections.users.getOrFetch(id)
    var games = new FinalProject.Collections.Games
    games.fetch({data: {user_id: id}})
    var userView = new FinalProject.Views.UserShow({model: user, collection: games})
    this.swapView(userView)
  },
  
  search: function(query){
    var search = new FinalProject.Collections.GameDatas
    search.fetch({data: {query: query}})
    var searchView = new FinalProject.Views.SearchView({collection: search, query: query})
    this.swapView(searchView)
  },
  
  swapView: function(view){
    if(this.currentView){
      this.currentView.remove()
    }
    
    $('.content').html(view.render().$el.fadeIn(500, function(){
      view.onRender();
    }))
    this.currentView = view
  }
  
  
  
})
FinalProject.Views.Dashboard = Backbone.CompositeView.extend({
  
  template: JST['dashboard'],
  
  initialize: function(options){
    this.listenTo(this.collection, 'sync', this.render)
    this.listenTo(this.collection, 'add', this.addGame)
  },
  
  addGame: function(game){
    if ( game.get('user_id') == $('#bootstrapped-user-id').html() && game.get('sold') === false ){
      var gameShow = new FinalProject.Views.GameList({model: game, dashboard: true});
      this.addSubview('.games-for-sale', gameShow);
    } else {
      var user_id = $('#bootstrapped-user-id').text();
      var gameShow = new FinalProject.Views.GameList({model: game, dashboard: true, userID: user_id});
      this.addSubview('.recent-trades', gameShow);
    }
    
    
  },
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
  
  
  
});

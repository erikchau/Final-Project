FinalProject.Views.Browse = Backbone.CompositeView.extend({
  
  template: JST['games/index'],
  
  initialize: function(){
    var that = this;
    this.game_list = [];
    this.listenTo(this.collection, 'add', this.addGame);
    this.listenTo(this.collection, 'sync change', this.render)
    _(that.collection.models).each(that.addGame.bind(that));
    
  },
  
  addGame: function(game){
    if (this.game_list.indexOf(game.get('api_id')) == -1) {
      this.game_list.push(game.get('api_id'))
      var browseItemShow = new FinalProject.Views.BrowseItem({model: game});
      this.addSubview('.games-index', browseItemShow); 
    } else { return; }
  },

  render: function(){
    var view = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    
    return this;
  }
  
});
FinalProject.Views.Browse = Backbone.CompositeView.extend({
  
  template: JST['games/index'],
  
  initialize: function(){ 
    this.listenTo(this.collection, 'add', this.addGame);
    this.listenTo(this.collection, 'sync', this.render)
    _(this.collection.models).each(this.addGame.bind(this));
  },
  
  
  addGame: function(game){
    if (game.attributes['sold'] === true){
      return;
    }
    var gameShow = new FinalProject.Views.GameShow({model: game});
    this.addSubview('.games-index', gameShow);
  },

  render: function(){
    var view = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    
    return this;
  }
  
});
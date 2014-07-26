FinalProject.Views.Browse = Backbone.CompositeView.extend({
  
  template: JST['games/index'],
  
  initialize: function(){
    var that = this;
    
    this.listenTo(this.collection, 'add', this.addGame);
    this.listenTo(this.collection, 'sync change', this.render)
    _(that.collection.models).each(that.addGame.bind(that));
    
  },
  
  
  addGame: function(game){
    var gameShow = new FinalProject.Views.GameList({model: game});
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
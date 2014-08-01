FinalProject.Views.UserShow = Backbone.CompositeView.extend({
  
  template: JST['users/show'],
  
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addGame)
    this.listenTo(this.collection, 'sync', this.render)
    this.listenTo(this.model, 'sync', this.render)
  },
  
  addGame: function(game){
    if(game.get('sold') === false){
      var gameShow = new FinalProject.Views.BrowseItem({model: game});
      this.addSubview('.selling', gameShow);
    }
  },
  
  render: function(){
    var renderedContent = this.template({user: this.model});
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
  
  
  
  
});
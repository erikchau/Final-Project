FinalProject.Views.GameList = Backbone.View.extend({
  
  template: JST['games/list'],
  
  initialize: function(options){
    this.listenTo(this.model, 'sync add change', this.render)
  },
  
  render: function(){
    var renderedContent = this.template({game: this.model})
    this.$el.html(renderedContent);
    return this;
  }
  
  
});
FinalProject.Views.BrowseItem = Backbone.View.extend({
  
  template: JST['games/browse_item'],
  
  className: 'browse-item',
  
  render: function(){
    var renderedContent = this.template({ game: this.model});
    this.$el.html(renderedContent);
    return this;
    
  }
  
  
  
});
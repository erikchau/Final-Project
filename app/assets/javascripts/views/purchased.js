FinalProject.Views.Purchased = Backbone.View.extend({
  
  template: JST['purchased'],
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
  
});
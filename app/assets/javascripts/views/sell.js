FinalProject.Views.Sell = Backbone.View.extend({
  
  template: JST['sell'],
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this
  }
  
});
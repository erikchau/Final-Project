FinalProject.Views.Dashboard = Backbone.View.extend({
  
  template: JST['dashboard'],
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
  
  
  
});
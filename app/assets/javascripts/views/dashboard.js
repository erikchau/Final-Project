FinalProject.Views.Dashboard = Backbone.CompositeView.extend({
  
  template: JST['dashboard'],
  
  initialize: function(options){
    this.listenTo(this.collection, 'sync', this.render)
    this.listenTo(this.collection, 'add', this.addGame)
  },
  
  addGame: function(){
    
  },
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
  
  
  
});

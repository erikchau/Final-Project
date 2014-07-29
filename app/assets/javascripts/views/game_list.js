FinalProject.Views.GameList = Backbone.View.extend({
  
  template: JST['games/list'],
  
  initialize: function(options){
    if (options.dashboard) {
      this.dashboard = true;
    } else {
      this.dashboard = false;
    }
    
    if (options.userID) {
      this.userID = options.userID;
    } else {
      this.userID = null;
    }
    
    this.listenTo(this.model, 'sync add change', this.render)
  },
  
  render: function(){
    var renderedContent = this.template({game: this.model, dashboard: this.dashboard, userID: this.userID})
    this.$el.html(renderedContent);
    return this;
  }
  
  
});
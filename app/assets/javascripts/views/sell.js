FinalProject.Views.Sell = Backbone.View.extend({
  
  template: JST['sell'],
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this
  },
  
  events: {
    'submit .listing-form': 'createListing'
  },
  
  createListing: function(event){
    event.preventDefault();
    
    var params = $(event.currentTarget).serializeJSON();
    
    var newListing = new FinalProject.Models.Game(params.game);
    debugger
    newListing.save({}, {
      success: function(game){
        FinalProject.Collections.games.add(newListing);
        newListing.fetch();
        Backbone.history.navigate('#/games/' + newListing.id , {trigger: true});
      }
    });
  }
  
});
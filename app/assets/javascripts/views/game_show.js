FinalProject.Views.GameShow = Backbone.View.extend({
  
  template: JST['games/show'],
  
  initialize: function(){
    this.listenTo(this.model, 'change sync', this.render)
  },
  
  events:{
    'submit .buy-form': 'buyGame'
  },
  
  render: function(){
    var renderedContent = this.template({game: this.model});
    this.$el.html(renderedContent);
    return this;
    
  },
  
  buyGame: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var sale = new FinalProject.Models.Sale(params.sale);
    sale.save({}, {
      success: function(){
        Backbone.history.navigate('#/purchased')
      }
    });
  }
  
  
  
});
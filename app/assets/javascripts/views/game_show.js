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
      success: function(data){
        var new_coins = parseInt($('.coin_amt').text()) - data.get('price')
        $('.coin_amt').html(new_coins)
        Backbone.history.navigate('#/purchased')
      },
      error: function(error, response){
        var errorMessage = '<p>' + response.responseText + '</p>';
        $('.cannot-buy-error').removeClass('cannot-buy-error');
      }
    });
  }
  
  
  
});
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
  
  events:{
    'submit .buy-form': 'buyGame'
  },

  buyGame: function(event){
    that = this
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var sale = new FinalProject.Models.Sale(params.sale);
    sale.save({}, {
      success: function(data){
        that.model.set({sold: true})
        var new_coins = parseInt($('.coin_amt').text()) - data.get('price')
        $('.coin_amt').html(new_coins)
        Backbone.history.navigate('#/purchased')
      },
      error: function(error, response){
        var errorMessage = '<p>' + response.responseText + '</p>';
        $('.cannot-buy-error').addClass('cannot-buy-error-show');
        $('.cannot-buy-error' + '.' + that.model.id).removeClass('cannot-buy-error');
      }
    });
  },
  
  render: function(){
    var renderedContent = this.template({game: this.model, dashboard: this.dashboard, userID: this.userID})
    this.$el.html(renderedContent);
    return this;
  }
  
  
});
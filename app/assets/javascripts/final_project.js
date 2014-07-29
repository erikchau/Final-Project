window.FinalProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FinalProject.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  FinalProject.initialize();
  $(document).on('submit', '.buy-coin-form', buyCoins)
});


var buyCoins = function(event){
  event.preventDefault();
  var data = $(event.currentTarget).serializeJSON();
  var user = new FinalProject.Models.User;
  user.set(data.user);
  user.set({id: parseInt( $('#bootstrapped-user-id').text() ) });
  user.save({}, {
    success: function(data){
      $('#coin-amount').val('');
      $('.coin_amt').html(data.attributes.coins);
      $('.coin-modal').modal('hide')
    }
  });
};
FinalProject.Views.GameShow = Backbone.CompositeView.extend({
  
  template: JST['games/show'],
  
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.model, 'sync', this.addImage)
    this.listenTo(this.collection, 'add', this.addListing)
    this.listenTo(this.collection, 'sync', this.render)
    this.listenTo(this.collection, 'sync', this.addImage)
  },
  
  addListing: function(listing){
    var listingShow = new FinalProject.Views.GameList({model: listing});
    this.addSubview('.listings', listingShow);
  },
  
  render: function(){
    var renderedContent = this.template({game: this.model});
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  
  addImage: function(){
    var img = '<img src=\'' + this.model.get('image').small_url + '\' class="game-img">'
    this.$el.find($('.show-img')).html(img)
  }
 
  
  
  
});





  // events:{
//     'submit .buy-form': 'buyGame'
//   },



  // buyGame: function(event){
//     that = this
//     event.preventDefault();
//     var params = $(event.currentTarget).serializeJSON();
//     var sale = new FinalProject.Models.Sale(params.sale);
//     sale.save({}, {
//       success: function(data){
//         that.model.set({sold: true})
//         var new_coins = parseInt($('.coin_amt').text()) - data.get('price')
//         $('.coin_amt').html(new_coins)
//         Backbone.history.navigate('#/purchased')
//       },
//       error: function(error, response){
//         var errorMessage = '<p>' + response.responseText + '</p>';
//         $('.cannot-buy-error').removeClass('cannot-buy-error');
//       }
//     });
//   }
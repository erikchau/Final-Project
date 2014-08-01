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
    var userID = $('#bootstrapped-user-id').text();
    var listingShow = new FinalProject.Views.GameList({model: listing, userID: userID});
    this.addSubview('.listings', listingShow);
  },
  
  render: function(){
    var renderedContent = this.template({game: this.model});
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  
  addImage: function(){
    var img = '<img src=\'' + this.model.get('image').small_url + '\' class="game-img well">'
    this.$el.find($('.show-img')).html(img)
  }
 
  
  
  
});





  
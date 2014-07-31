FinalProject.Views.Sell = Backbone.CompositeView.extend({
  
  template: JST['sell'],
  
  
  initialize: function(){
    this.search = new FinalProject.Collections.GameDatas
    this.listenTo(this.search, 'add', this.addResult)
  },
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this
  },
  
  events: {
    'submit .listing-form': 'createListing',
    'submit .sell-search': 'findGames',
    'click .sell-img': 'fillForm'
  },
  
  findGames: function(event){
    event.preventDefault();
    $('.search-results').empty();
    var query = $(event.currentTarget).serializeJSON();
    this.search.fetch({data: {query: query.query}});
  },
  
  addResult: function(result){
    var resultView = new FinalProject.Views.SearchResult({model: result});
    this.addSubview('.search-results', resultView)
  },
  
  fillForm: function(event){
    event.preventDefault();
    $('.create-listing-modal').modal('show');
    $('input.form-title').val($(event.currentTarget).data('name'));
    $('input.sell-api-id').val($(event.currentTarget).data('api'));
  },
  
  createListing: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newListing = new FinalProject.Models.Game(params.game);
    newListing.save({}, {
      success: function(game){
        Backbone.history.navigate('#/games/' + newListing.get('api_id') , {trigger: true});
        $('div.modal-backdrop').remove();
      }
    });
  }
  
  
  
});
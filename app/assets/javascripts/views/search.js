FinalProject.Views.SearchView = Backbone.CompositeView.extend({
  
  template: JST['search/search'],
  
  initialize: function(options){
    this.query = options.query
    this.listenTo(this.collection, 'add', this.addResult);
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  addResult: function(result){
    $('.loading-results').addClass('hidden');
    var resultView = new FinalProject.Views.SearchResult({model: result});
    this.addSubview('.search-results', resultView)
  },
  
  render: function(){
    var renderedContent = this.template({query: this.query});
    this.$el.html(renderedContent);
    if (this.collection.length === 0) {
      $('.loading-results').addClass('hidden');
      $('.no-results').removeClass('hidden');
    }
    this.attachSubviews();
    return this;
  }
  
  
});




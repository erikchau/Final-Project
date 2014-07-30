FinalProject.Views.SearchResult = Backbone.View.extend({
  
  template: JST['search/search_result'],
  
  initialize: function(){
  },
  
  tagName: 'div',
  
  className: 'search-result-item',
  
  render: function(){
    var renderedContent = this.template({result: this.model});
    this.$el.html(renderedContent);
    return this;
  }
  
});
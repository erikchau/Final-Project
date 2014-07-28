FinalProject.Collections.Sales = Backbone.Collection.extend({
  
  url: 'api/sales',
  
  model: FinalProject.Models.Sale,
  
  getOrFetch: function(id){
    var sales = this;
    
    var sale;
    if ( sale = this.get(id) ) {
      sale.fetch();
    } else {
      sale = new FinalProject.Models.Sale({id: id})
      sale.fetch({
        success: function(){ sales.add(sale) }
      });
    }
    return sale;
  }
  
});

FinalProject.Collections.sales = new FinalProject.Collections.Sales
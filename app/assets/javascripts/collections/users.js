FinalProject.Collections.Users = Backbone.Collection.extend({
  
  url: 'api/users',
  
  model: FinalProject.Models.User,
  
  getOrFetch: function(id){
    var users = this;
    
    var user;
    if ( user = this.get(id) ) {
      user.fetch();
    } else {
      user = new FinalProject.Models.User({id: id})
      user.fetch({
        success: function(){ users.add(user) }
      });
    }
    return user;
  }
  
  
});

FinalProject.Collections.users = new FinalProject.Collections.Users
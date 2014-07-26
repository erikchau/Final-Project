FinalProject.Collections.Users = Backbone.Collection.extend({
  
  url: 'api/users',
  
  model: FinalProject.Models.User
  
  
});

FinalProject.Collections.users = new FinalProject.Collections.Users
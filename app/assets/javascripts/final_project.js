window.FinalProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FinalProject.Routers.AppRouter();
    Backbone.history.start();
    FinalProject.Collections.games.fetch();
  }
};

$(document).ready(function(){
  FinalProject.initialize();
});

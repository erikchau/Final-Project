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
});

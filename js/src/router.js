App.Router.map(function() {
  this.resource('posts', {path: '/'}, function() {
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.PostsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

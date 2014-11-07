App.Router.map(function() {
  this.resource('posts', {path: '/'}, function() {
    this.route('new');
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.PostsIndexRoute = Ember.Route.extend({
  controllerName: 'posts',
  model: function() {
    return this.modelFor('posts');
  }
});

App.PostsNewRoute = Ember.Route.extend({
  controller: function() {
    
  }
});

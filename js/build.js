window.App = Ember.Application.create();
App.Store = DS.Store.extend({
  adapter: DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://frenddit.firebaseio.com/data/rest')
  })
});

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

App.PostController = Ember.ObjectController.extend({
  
});

App.PostsController = Ember.ArrayController.extend({

});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  date: DS.attr('date'),

  domain: function() {
    var a = document.createElement('a');
    a.href = this.get('link');

    return a.hostname;
  }.property('link')
});

App.Post.FIXTURES = [
  {id: 1, title: 'Inspiration', link: 'http://reddit.com'},
  {id: 2, title: 'Procrastination', link: 'http://facebook.com'},
  {id: 3, title: 'Do not click this', link: 'http://4chan.com'}
];

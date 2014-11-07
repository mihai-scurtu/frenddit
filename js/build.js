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
  controllerName: 'posts',
  model: function() {
    return this.modelFor('posts');
  }
});

App.PostController = Ember.ObjectController.extend({
  
});

App.PostsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['date']
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  date: DS.attr('date'),

  domain: function() {
    var a = document.createElement('a');
    a.href = this.get('link');

    return a.hostname;
  }.property('link'),

  timeAgo: function() {
    return moment(this.get('date')).fromNow()
  }.property('date')
});

App.Post.FIXTURES = [
  {id: 1, title: 'Inspiration', link: 'http://reddit.com'},
  {id: 2, title: 'Procrastination', link: 'http://facebook.com'},
  {id: 3, title: 'Do not click this', link: 'http://4chan.com'}
];

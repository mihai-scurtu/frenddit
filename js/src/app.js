window.App = Ember.Application.create();
App.Store = DS.Store.extend({
  adapter: DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://frenddit.firebaseio.com/data/rest')
  })
});

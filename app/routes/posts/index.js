import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'posts',
  model: function() {
    return this.modelFor('posts');
  }
});

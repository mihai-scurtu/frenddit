import DS from 'ember-data';

// global firebase
export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://frenddit.firebaseio.com/data/rest/')
});

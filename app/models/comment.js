import DS from 'ember-data';

/* global moment */
export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date'),

  post: DS.belongsTo('post', {async: true}),

  timeAgo: function() {
    return moment(this.get('date')).fromNow();
  }.property('date')
});

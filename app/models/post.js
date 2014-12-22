import DS from 'ember-data';

/* global moment */
export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  date: DS.attr('date'),

  comments: DS.hasMany('comment', {async: true}),

  sortedComments: function() {
    var comments = this.get('comments');

    return comments.sortBy('date').reverseObjects();
  }.property('comments.@each.date'),

  domain: function() {
    var a = document.createElement('a');
    a.href = this.get('link');

    return a.hostname;
  }.property('link'),

  timeAgo: function() {
    return moment(this.get('date')).fromNow();
  }.property('date')
});

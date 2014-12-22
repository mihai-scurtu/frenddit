import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date'),

  post: DS.belongsTo('post', {async: true})
});

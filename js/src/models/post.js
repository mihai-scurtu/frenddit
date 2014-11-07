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

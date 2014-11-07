App.Post = DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string')
});

App.Post.FIXTURES = [
  {id: 1, title: 'Inspiration', link: 'http://reddit.com'},
  {id: 2, title: 'Procrastination', link: 'http://facebook.com'},
  {id: 3, title: 'Do not click this', link: 'http://4chan.com'}
];

import Ember from 'ember';

export default Ember.Controller.extend({
  post: {},
  actions: {
    save: function() {
      var post = this.get('post');
      console.log(post);
      if(post.title.length && post.link.length) {
        post.date = new Date();
        var newPost = this.store.createRecord('post', post);
        newPost.save();

        this.transitionToRoute('posts.index');
      }
    }
  }
});

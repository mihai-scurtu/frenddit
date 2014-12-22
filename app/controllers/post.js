import Ember from 'ember';

export default Ember.ObjectController.extend({
  comment: {},

  actions: {
    addComment: function() {
      var self = this;
      var comment = this.get('comment');

      if(comment.name.length && comment.email.length && comment.text.length) {
        comment.date = new Date();

        var newComment = this.store.createRecord('comment', comment);
        var post = this.get('model');

        console.log(post.get('comments'));

        newComment.save().then(function() {
          self.set('comment', {});

          post.get('comments').pushObject(newComment);
          return post.save();
        });
      }
    }
  }
});

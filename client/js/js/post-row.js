Template.postRow.events({
  "click .upvote-post": function(event) {
    var postId = this._id;
    Meteor.call("upvotePost", postId, function(err, resp) {

    });
  },

  "click .downvote-post": function(event) {
    var postId = this._id;
    Meteor.call("downvotePost", postId, function(err, resp) {

    });
  }
});
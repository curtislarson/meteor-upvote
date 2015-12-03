Template.commentRow.events({
  "click .upvote-comment": function(event) {
    var commentId = this._id;
    Meteor.call("upvoteComment", commentId, function(err, resp) {

    });
  },

  "click .downvote-comment": function(event) {
    var commentId = this._id;
    Meteor.call("downvoteComment", commentId, function(err, resp) {

    });
  }
})
Template.post.helpers({
  comments: function() {
    return Comments.find({}, {
      sort: {
        numDifference: -1
      }
    });
  },
  post: function() {
    return Posts.findOne({});
  }
})
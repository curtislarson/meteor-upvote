Template.index.helpers({
  posts: function() {
    return Posts.find({}, {
      sort: {
        numDifference: -1
      }
    });
  }
})
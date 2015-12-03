Schema = {};

Schema.Post = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  owner: {
    type: String
  },
  numUpvotes: {
    type: Number,
    autoValue: function() {
      if (this.isInsert) {
        return 1;
      }
    }
  },
  numDownvotes: {
    type: Number,
    autoValue: function() {
      if (this.isInsert) {
        return 0;
      }
    }
  },
  numDifference: {
    type: Number,
    autoValue: function() {
      if (this.isInsert) {
        return 1;
      }
    }
  }
});

Schema.Comment = new SimpleSchema({
  postId: {
    type: String
  },
  content: {
    type: String
  },
  owner: {
    type: String
  },
  numUpvotes: {
    type: Number,
    autoValue: function() {
      if (this.isInsert) {
        return 1;
      }
    }
  },
  numDownvotes: {
    type: Number,
    autoValue: function() {
      if (this.isInsert) {
        return 0;
      }
    }
  },
  numDifference: {
    type: Number,
    autoValue: function() {
      if (this.isInsert) {
        return 1;
      }
    }
  }
});

Posts = new Meteor.Collection("posts");
Comments = new Meteor.Collection("comments");

Posts.attachSchema(Schema.Post);
Comments.attachSchema(Schema.Comment);
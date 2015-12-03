Router.route("/", {
  name: "index",
  layoutTemplate: "mainLayout",
  waitOn: function() {
    return Meteor.subscribe("posts");
  },
  action: function() {
    this.render("index");
  }
});

Router.route("/create-post", {
  name: "createPost",
  layoutTemplate: "mainLayout",
  action: function() {
    if (Meteor.userId()) {
      this.render("newPost");
    }
    else {
      Router.go("/");
    }
  }
});

Router.route("/post/:postId", {
  name: "post",
  layoutTemplate: "mainLayout",
  waitOn: function() {
    return [
      Meteor.subscribe("comments", this.params.postId),
      Meteor.subscribe("singlepost", this.params.postId)
    ];
  },
  action: function() {
    var postId = this.params.postId;
    this.render("post");
  }
})
Template.newPost.events({
  "submit .new-post": function(event) {
    Meteor.call("newPost",
                event.target.title.value,
                event.target.content.value,
                function(err, resp) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(resp);
        Router.go("/");
      }
    });
    event.preventDefault();
  },
});
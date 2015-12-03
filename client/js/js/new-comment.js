Template.newComment.events({
  "submit .new-comment": function(event) {
    var postId = Template.instance().data;
    Meteor.call("newComment",
                 event.target.content.value,
                 postId,
                 function(error, response) {
      if (error) {
        console.log("error");
      }
      else {
        console.log(response);
      }
    });
    event.preventDefault();
  },
});
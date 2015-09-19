var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a comment Box
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);

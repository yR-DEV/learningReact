var CommentBox  = React.createClass({
  render:function() {
    return (
      <div className="commentBox">
      Hello, World! I am a comment box in ReactJs
      </div>
    );
  }
});
React.render(
  <CommentBox />
  document.getElementById('content')
)

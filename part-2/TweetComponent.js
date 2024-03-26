//Tweet component that takes the props of the username, the name, the date
//and the text of the tweet.
function Tweet(props) {
  return (
    <div className="tweet">
      <span className="tweet-name">{props.name}</span>
      <span className="tweet-username">{props.username}</span>
      <span className="tweet-date">{props.date}</span>
      <div className="tweet-body">{props.message}</div>
    </div>
  );
}
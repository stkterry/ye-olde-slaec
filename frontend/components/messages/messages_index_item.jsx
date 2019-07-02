import React from "react";


class MessagesIndexItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { message, user } = this.props;
    return (
      <div className="messages-index-item">
        <div className="message-gutter">
          <img src={window.avatarOneURL} className="messages-index-item-avatar"/> 
        </div>
        <div className="message-contents">
          <h1>{user.username}</h1>
          <p>{message.body}</p>
        </div>
      </div>
    )

  }

}

export default MessagesIndexItem;
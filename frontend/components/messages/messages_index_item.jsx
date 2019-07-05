import React from "react";

import { timestampToObj } from "../../util/message_util";


class MessagesIndexItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { message, user } = this.props;
    let time = timestampToObj(message.created_at);

    return (
      <div className="messages-index-item">
        <div className="message-gutter">
          <img src={window.avatarOneURL} className="messages-index-item-avatar"/> 
        </div>
        <div className="message-contents">
          <div className="message-header">
            <h1>{user.username}</h1>
            <h4>{time.time}</h4>
          </div>
          <p className="message-body">{message.body}</p>
        </div>
      </div>
    )

  }

}

export default MessagesIndexItem;
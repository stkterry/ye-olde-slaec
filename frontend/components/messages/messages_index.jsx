import React from "react";

import MessagesIndexItem from "./messages_index_item_container";

class MessagesIndex extends React.Component {



  render() {
    const { messages, users } = this.props;
    // console.log(users[messages[1].author_id]);
    // console.log(messages[1].author_id)
    let messagesDat = messages.map( message => (
      <MessagesIndexItem 
        key={message.id}
        message={message}
        user={users[message.author_id]}
      />
    ))

    return (
      <div className="messages-index">
        { messagesDat }
      </div>
    );
  }


};


export default MessagesIndex;
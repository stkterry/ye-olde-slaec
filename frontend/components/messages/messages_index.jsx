import React from "react";
import MessagesIndexItem from "./messages_index_item_container";


const scrollTo = (loc) => document.getElementById(loc).scrollIntoView({ block: "end", behavior: "smooth" });

class MessagesIndex extends React.Component {

  componentDidMount() {
    scrollTo("bottom")
  }

  componentDidUpdate() {
    scrollTo("bottom")
  }

  render() {
    const { messages, users } = this.props;
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
        <div id="bottom" ref={this.bottom}/>
      </div>
    );
  }
};


export default MessagesIndex;
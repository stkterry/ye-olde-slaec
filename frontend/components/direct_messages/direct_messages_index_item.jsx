import React from "react";
import { Link } from "react-router-dom";


class DirectMessagesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.deleteDirectMessage = this.deleteDirectMessage.bind(this);
  }

  dynamicName() {
    let {channel, users, currentUser} = this.props;
    let messageName = [];
    const user_ids = channel.user_ids.filter(user_id => user_id !== currentUser.id);

    for (let user_id of user_ids) {
      if (users[user_id]) messageName.push(users[user_id].username)
    }
    return messageName.join(", ");
  }

  deleteDirectMessage() {
    this.props.deleteChannel(this.props.channel.id)
  }

  render() {
    const { channel, currentUser, current, users } = this.props;
    const currentChannel = Number(current) === channel.id ? "active" : "inactive";
    if (channel.is_dm && currentUser.subscribed_channel_ids.includes(channel.id)) {
      
      let messageName = (users) ? this.dynamicName() : "null"
      return (
        <div className="direct-messages-index-item">
          <Link
            to={`/messages/${channel.id}`}
            className={`channel-index-item-${currentChannel}`}
          >{messageName}</Link>
          <i className='far fa-times-circle' onClick={this.deleteDirectMessage}/>
        </div>
      )
    } else return null;

  }

}

export default DirectMessagesIndexItem;
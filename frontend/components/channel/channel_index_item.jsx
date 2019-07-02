import React from "react";
import { Link } from "react-router-dom";

class ChannelIndexItem extends React.Component {

  render() {
    const { channel, currentUser, current } = this.props;
    const currentChannel = Number(current) === channel.id ? "active" : "inactive";
    if (channel.is_dm) return null;
    else return (
      <Link 
        to={`/messages/${channel.id}`}
        className={`channel-index-item-${currentChannel}`}      
      ># {channel.name}</Link>
    )
  }

}

export default ChannelIndexItem
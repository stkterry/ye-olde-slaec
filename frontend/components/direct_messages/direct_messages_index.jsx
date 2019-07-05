import React from "react";
import DirectMessagesIndexItem from "./direct_messages_index_item";

class DirectMessagesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { channels, users } = this.props;
    let channelsDat = channels.map((channel, idx) => (
      <li key={idx}>
        <DirectMessagesIndexItem
          users={users}
          channel={channel}
          currentUser={this.props.currentUser}
          current={this.props.match.params.channelId}
          deleteChannel={this.props.deleteChannel}
        />
      </li>
    ))

    return (
      <ul id="channel-index">
        {channelsDat}
      </ul>
    )
  }
}


export default DirectMessagesIndex;
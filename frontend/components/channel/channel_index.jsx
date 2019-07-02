import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { channels } = this.props;

    let channelsDat = channels.map((channel, idx) => (
      <li key={idx}>
        <ChannelIndexItem 
          channel={channel} 
          currentUser={this.props.currentUser}
          current={ this.props.match.params.channelId}  
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


export default ChannelIndex;
import React from "react";

import NavBar from "../nav_bar/nav_bar_container";
import ChannelHeader from "./channel_header/channel_header_container";
import MessagesIndex from "../messages/messages_index";

class WorkspaceShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], users: [], loaded: false };

  }
  
  componentDidMount() {
    this.props.fetchChannel(this.props.channelId)
      .then( () => this.setState({ loaded: true }) );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
      this.props.fetchChannel(this.props.channelId)
        .then(() => this.setState({ loaded: true }));
    }
  }

  render() {
    let {messages, users, channel} = this.props;
    
    if (this.state.loaded) {
      let channelMessages = messages.filter(message => channel.id == message.channel_id )

      return (
        <nav id="workspace-contents">
          <NavBar />
          <div className="main-content">
            <ChannelHeader channel={ channel }/>
            <MessagesIndex users={users} messages={channelMessages} />
          </div>
        </nav>
      )
    } else {




      return (
        <nav id="workspace-contents">
          <NavBar />
          <div className="main-content"></div>
        </nav>
      )
    }
  }
}

export default WorkspaceShow;
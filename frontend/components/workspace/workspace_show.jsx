import React from "react";
import { withRouter } from "react-router-dom";

import NavBar from "../nav_bar/nav_bar_container";
import ChannelHeader from "./channel_header/channel_header_container";
import MessagesIndex from "../messages/messages_index";
import MessageForm from "../messages/message_form";

import SubscribeForm from "../channel/channel_subscribe_form";
import util from "../../util/util";

class WorkspaceShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], users: [], loaded: false };
  }
  
  componentDidMount() {
    this.props.fetchChannel(this.props.channelId)
      .then( () => this.setState({ loaded: true }) );

    const that = this;

    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.match.params.channelId },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
            case "messages":
              this.setState({
                messages: data.messages
              });
            }
          },
          speak: function (data) {
            data["user_id"] = that.props.currentUser.id;
            data["channel_id"] = that.props.match.params.channelId;

            return this.perform("speak", data);
          },
          load: function () {
            return this.perform("load");
          }
      }
    )
  }

  componentDidUpdate(prevProps) {

    if (prevProps.messages !== this.props.messages) {
      this.setState({ messages: this.props.messages });
    }
    if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
      this.props.fetchChannel(this.props.channelId)
        .then(() => this.setState({ loaded: true }));
    }
  }

  componentWillUnmount() {
    App.cable.subscriptions.subscriptions[0].unsubscribe();
  }

  render() {
    let {messages, users, channel, currentUser} = this.props;
    if (this.state.loaded) {
      let channelMessages = messages.filter(message => channel.id == message.channel_id );
      let channelUsers = Object.filter(users, user => user.subscribed_channel_ids.includes(channel.id));

      let noty;
      if (currentUser.subscribed_channel_ids.includes(channel.id)) {
        noty = <MessageForm channel={ channel } />
      } else {
        noty = <SubscribeForm channel={ channel } />
      }

      return (
        <nav id="workspace-contents">
          <NavBar />
          <div className="main-content">
            <ChannelHeader channel={ channel } members={channelUsers}/>
            <MessagesIndex users={channelUsers} messages={channelMessages} />
            {noty}
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

export default withRouter(WorkspaceShow);
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createMessage } from "../../actions/message_actions";
// import App from "../app";

// import MessageUtil from "../../util/message_util";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    let newMessage = Object.assign({}, 
      this.state, 
      { 
        author_id: this.props.currentUser.id,
        channel_id: this.props.match.params.channelId
      }
    )
    this.props.createMessage(this.props.channelId, newMessage)
    // App.cable.subscriptions.subscriptions[1].speak({ message: this.state.body });
    this.setState({ body: "" });
  }
  onEnterPress(event) {
    if (event.keyCode == 13 && event.shiftKey == false) {
      this.handleSubmit(event);
    }
  }

  handleInput(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render() {
    const { channel } = this.props;
    const boxName = channel.is_dm ? `Message ${channel.name}` : `Message #${channel.name}`;

    return (
      <footer id="messages-footer">
        <form id="messages-form" onSubmit={this.handleSubmit}>
          <textarea 
            rows={`${1 + Math.floor(this.state.body.length/125)}`} 
            type="text" 
            onChange={this.handleInput("body")} 
            onKeyDown={this.onEnterPress}
            value={this.state.body} 
            placeholder={boxName}
          />
        </form>
      </footer>
    )
  }

}

// const mSP = (state, ownProps) => ({
//   channel: ownProps.channel,
//   currentUser: state.entities.users[state.session.id]
// });
const mSP = (state, ownProps) => {

  return {
    channel: ownProps.channel,
    currentUser: state.entities.users[state.session.id]
  }
};


const mDP = dispatch => ({
  createMessage: (channelId, message) => dispatch(createMessage(channelId, message))
})

export default withRouter(connect(mSP, mDP)(MessageForm));
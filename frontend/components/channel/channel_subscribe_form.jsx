import React from "react"
import { connect } from "react-redux"
import { createSubscriber } from "../../actions/subscriber_actions";

class SubscribeForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    const { channel, currentUser } = this.props;
    const subscriber = { user_id: currentUser.id, channel_id: channel.id};
    this.props.createSubscriber(channel.id, subscriber);
  }

  render() {
    const { channel } = this.props;

    return (
      <footer id="messages-footer">
        <form id="messages-form" onSubmit={this.handleSubmit}>
          <h1>You're viewing {channel.name}, considering subscribing to participate!</h1>
          <button className="action-button" type="submit">Subscribe!</button> 
        </form>
      </footer>
    )
  }
}

const mSP = (state, ownProps) => ({
  channel: ownProps.channel,
  currentUser: state.entities.users[state.session.id],
});

const mDP = dispatch => ({
  createSubscriber: (channelId, subscriber) => dispatch(createSubscriber(channelId, subscriber))
});

export default connect(mSP, mDP)(SubscribeForm);
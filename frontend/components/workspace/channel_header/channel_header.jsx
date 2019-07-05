import React from "react";
import merge from "lodash/merge";

class ChannelHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: this.props.channel.topic };
    this.submitTopicForm = this.submitTopicForm.bind(this);
    this.topicFormUpdate = this.topicFormUpdate.bind(this);
    this.cancelTopicForm = this.cancelTopicForm.bind(this);
    this.removeCurrentUserFromChannel = this.removeCurrentUserFromChannel.bind(this);
  }

  topicFormUpdate() {
    this.setState({ topic: event.target.value })
  }

  submitTopicForm(event) {
    event.preventDefault();
    let channelUpdate = merge({}, this.props.channel, {topic: this.state.topic});
    this.props.updateChannel(channelUpdate);
    this.cancelTopicForm();
  }
  
  showTopicForm() {
    document.getElementById("channel-header-topic-form").style.display = "block";
  }
  cancelTopicForm() {
    document.getElementById("channel-header-topic-form").style.display = "none";
    this.setState({topic: this.props.channel.topic || ""});
  }

  topicForm() {

    return (
      <div id="channel-header-topic-form" className="modal">
        <form onSubmit={this.submitTopicForm}>
          <textarea 
            className="topic-form-text" 
            onChange={this.topicFormUpdate} defaultValue={this.state.topic}></textarea>
          <div>
            <button type="reset" className="splash-button" onClick={this.cancelTopicForm}>Cancel</button>
            <button type="submit" className="splash-button">Set Topic</button>
          </div>
        </form>
      </div>
    )
  }

  removeCurrentUserFromChannel() {
    const { channel, currentUser } = this.props;
    this.props.deleteSubscriber(channel.id, currentUser.id);
  }

  render () {

    let {channel, members, currentUser} = this.props;
    let membersDat = members.map( member => <li>{member.username}</li>)

    let leaveButton = <></>
    if (currentUser.subscribed_channel_ids.includes(channel.id)) {
      leaveButton = <div 
        className="leave-channel-button"
        onClick={this.removeCurrentUserFromChannel}>
        <h1>Leave Channel</h1>
        {/* <i></i> */}
      </div>
    }

    return (
      <header id="channel-header">
        <div className="left-nav">
          <h1 id="channel-name">#{channel.name}</h1>
          <div id="channel-header-status">
            <div id="channel-starred-button" >
              <i className="far fa-star" />
            </div>
            <div id="channel-members-icon" className="spacer">
              <i className="material-icons">person_outline</i>
              <h4>{membersDat.length}</h4>
            </div>
            <div id="channel-pin-count" className="spacer">
              <i className="fa fa-sticky-note-o"/>
              <h4>0</h4>
            </div>
            <div id="channel-topic" className="spacer" onClick={this.showTopicForm} >
              <h4 id="channel-topic-text">{channel.topic || "Topic"}</h4>
              <button id="channel-topic-edit-button">Edit</button>
            </div>
          </div>
        </div>
        <div className="right-nav">
          <h1>Some Other Stuff</h1>
          {leaveButton}
        </div>
        
        {this.topicForm()}
      </header>

    )
  }
}

export default ChannelHeader;
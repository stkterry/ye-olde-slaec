import React from "react";
import merge from "lodash/merge";

class ChannelHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: this.props.channel.topic};
    this.submitTopicForm = this.submitTopicForm.bind(this);
    this.topicFormUpdate = this.topicFormUpdate.bind(this);
  }

  topicFormUpdate() {
    console.log(event.target.value);
    this.setState({ topic: event.target.value })
    console.log(this.state.topic);
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
  }

  topicForm() {

    return (
      <div id="channel-header-topic-form" className="modal">
        <form onSubmit={this.submitTopicForm}>
          <textarea 
            className="topic-form-text" 
            onChange={this.topicFormUpdate} defaultValue={this.state.topic}></textarea>
          <div>
            <button type="submit" className="splash-button" onClick={this.cancelTopicForm}>Cancel</button>
            <button type="submit" className="splash-button">Set Topic</button>
          </div>
        </form>
      </div>
    )
  }

  render () {

    let {channel, members} = this.props;

    let membersDat = members.map( member => <li>{member.username}</li>)
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
        </div>
        
        {this.topicForm()}
      </header>

    )
  }
}

export default ChannelHeader;
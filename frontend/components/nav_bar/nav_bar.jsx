import React from "react";
import { Link, withRouter } from "react-router-dom";
import merge from "lodash/merge";
import TeamMenu from "./team_menu/team_menu_container";
import ChannelIndex from "../channel/channel_index_container";
import DirectMessageIndex from "../direct_messages/direct_messages_index_container";

const emptyChannelForm = {
  name: "",
  topic: "",
  purpose: ""
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      channelForm: emptyChannelForm,
      user_ids: [this.props.currentUser.id],
      title: ""
    };
    this.submitChannelForm = this.submitChannelForm.bind(this);
    this.cancelChannelForm = this.cancelChannelForm.bind(this);
    this.cancelDirectMessageForm = this.cancelDirectMessageForm.bind(this);
    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.submitDirectMessageForm = this.submitDirectMessageForm.bind(this);
    this.escFunction = this.escFunction.bind(this);

  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.cancelChannelForm();
    }
  }
  componentDidMount() {
    this.props.fetchUsers();
    this.setState({loaded: true});
    document.addEventListener("keydown", this.escFunction, false);

  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }
  submitChannelForm() {
    const that = this;
    event.preventDefault();
    let newChannel = merge(
      {}, 
      this.state.channelForm, 
      { created_by: this.props.currentUser.id }
    )
    this.cancelChannelForm();
  }
  showChannelForm() {
    document.getElementById("new-channel-form").style.display = "block";
  }
  cancelChannelForm() {
    this.setState({ channelForm: emptyChannelForm })
    document.getElementById("new-channel-form").style.display = "none";
  }
  updateChannelForm(field) {
    let event = event || $.Event();
    event.preventDefault();
    return event => {
      let channelForm = {...this.state.channelForm};
      channelForm[field] = event.target.value;
      return this.setState({ channelForm: channelForm });
    }
  }
  channelForm() {
    return (
      <div id="new-channel-form" className="modal">
        <div id="channel-form-body">
          <div id="channel-form-content">
            <form id="channel-form" onSubmit={this.submitChannelForm}>
              <h1>Create A New Channel</h1>
              <input 
                type="text" 
                value={this.state.channelForm.name} 
                onChange={this.updateChannelForm("name")}
                placeholder="Name"
              />
              <input 
                type="text" 
                value={this.state.channelForm.topic} 
                onChange={this.updateChannelForm("topic")}
                placeholder="Topic (optional)"
              />
              <input 
                type="text" 
                value={this.state.channelForm.purpose} 
                onChange={this.updateChannelForm("purpose")}
                placeholder="Purpose (optional)"
              />
              <button type="submit" id="channel-form-submit" className="splash-button">Create Channel!</button>
              <button type="reset" id="channel-form-cancel" className="splash-button channel-form-cancel" onClick={this.cancelChannelForm}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    )
  }


  handleSelectUser() {
    const that = this;
    return event => {
      let { users } = that.props;
      let { title, user_ids } = that.state;
      let { innerText } = event.target;
      if (!title.includes(innerText)) {
        let id = users.filter(user => user.username === innerText)[0].id;
        return (title) ? (
          this.setState({ title: `${title}, ${innerText}`, user_ids: user_ids.concat(id) })
        ) : (
          this.setState({ title: innerText, user_ids: user_ids.concat(id) })
        )

      } else if (title.includes(innerText) && innerText !== "") {
        const unselectUser = users.filter(user => user.username === innerText)[0];
        const newUserIds = user_ids.filter(id => id !== unselectUser.id);
        const oldTitle = users.filter(user => newUserIds.includes(user.id));
        const newTitle = [];

        oldTitle.forEach(user => {
          if (user.id !== that.props.currentUser.id) newTitle.push(user.username);
        });

        return this.setState({ title: `${newTitle.join(', ')}`, user_ids: newUserIds });
      }
    };
  }
  submitDirectMessageForm() {
    const that = this;
    event.preventDefault();
    let newChannel = merge(
      {},
      this.state.channelForm,
      { 
        created_by: this.props.currentUser.id,
        name: this.state.title,
        user_ids: this.state.user_ids,
        is_dm: true,
        is_private: true
      }
    )
    this.props.createChannel(newChannel)
      .then(dat => that.props.history.push(`/messages/${dat.channel.id}`));
    this.cancelDirectMessageForm();

  }
  showDirectMessageForm() {
    document.getElementById("new-direct-message-form").style.display = "block";
  }
  cancelDirectMessageForm() {
    this.setState({ 
      channelForm: emptyChannelForm,
      user_ids:[this.props.currentUser.id],
      title: "" 
    })
    document.getElementById("new-direct-message-form").style.display = "none";
  }

  directMessageForm() {
    if (!this.props.users) return null;
    const that = this;
    const users = this.props.users.filter(user => user.username !== this.props.currentUser.username)

    const selectedUsers = that.state.user_ids.map(id => {
      if (this.props.currentUser.id !== id) {
        let user = that.props.users.filter(user => user.id === id)[0];
        return <li key={id} className="selected-user">
          <h2 className="selected-user-username">{user.username}</h2>
        </li>
      }
    });

    const input = this.state.user_ids.length === 1 ? (
      <input className="direct-message-input" type="text" onChange={this.updateChannelForm("name")} placeholder="Find or start a conversation" autoFocus />
    ) : (
      <>
        <div className="clicked-user" onClick={this.handleSelectUser()}>{selectedUsers}</div>
      </>
    )

    return (
      <div id="new-direct-message-form" className="modal">
        <div id="channel-form-body">
          <div id="channel-form-content">
            <form id="channel-form" onSubmit={this.submitDirectMessageForm}>
              <h1>Direct Message</h1>
              {input}
              <ul className="user-list-container">
                {users.map(user => <li key={user.id} className="users-list-item" onClick={this.handleSelectUser()}>
                  {/* <img src={user.avatar} className="user-avatar" /> */}
                  <span>{user.username}</span>
                </li>)}
              </ul>
              <button type="submit" id="channel-form-submit" className="splash-button">Create Message!</button>
              <button type="reset" id="channel-form-cancel" className="splash-button channel-form-cancel" onClick={this.cancelDirectMessageForm}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className="nav_bar">
        <TeamMenu />

        <div id="nav_bar-threads">
          <h1>Threads</h1>
        </div>

        <div id="nav_bar-channels">
          <h1>Channels </h1>
          <ChannelIndex />
        </div>

        <div id="nav_bar-channel_form" 
             className="channel-index-item-inactive"
             onClick={this.showChannelForm}>
            <i className="material-icons">add</i>
            <h1>Add a channel</h1>
        </div>

        <div id="nav_bar-direct_messages">
          <div id="nav_bar-new_message"
            onClick={this.showDirectMessageForm}>
            <h1>Direct Messages</h1>
            <i className="material-icons">add_circle_outline</i>
          </div>
          <DirectMessageIndex />
        </div>

        {this.directMessageForm()}
        {this.channelForm()}

        <div className="team-menu-div">
          <a href="https://steventerry.netlify.com/" className="team-menu-per" target="_blank" rel="noopener noreferrer"><i className='fab fas fa-portrait' /></a>
          <a href="https://github.com/stkterry/quelea" className="team-menu-per" target="_blank" rel="noopener noreferrer"><i className='fab fa-github-square' /></a>
          <a href="https://angel.co/stkterry" className="team-menu-per" target="_blank" rel="noopener noreferrer"><i className="fab fa-angellist" /></a>
        </div>
      </div>
    )
  }

}

export default withRouter(NavBar);
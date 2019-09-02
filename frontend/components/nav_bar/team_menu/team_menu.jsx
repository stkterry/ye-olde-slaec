import React from "react";

class TeamMenu extends React.Component {

  render() {
    return (
      <>
        <div id="nav_bar-team_menu">
          <div id="team_menu-top">
            <h1>App Academy</h1>
            <i className="far fa-bell" />
          </div>
          <div id="team_menu-bottom">
            <h4>{this.props.currentUser.username}</h4>
            <button id="team_menu-logout-button" className="action-button" onClick={this.props.logout}>Logout</button>
          </div>
        </div>
      </>
    )
  }

}

export default TeamMenu
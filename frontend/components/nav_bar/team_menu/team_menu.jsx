import React from "react";

class TeamMenu extends React.Component {

  render() {
    return (
      <>
        <div id="nav_bar-team_menu">
          <div id="team_menu-top">
            <h1>Ye Olde Sleac</h1>
            <i className="far fa-bell" />
          </div>
          <div className="team-menu-div">
            <a href="https://steventerry.netlify.com/" className="team-menu-per" target="_blank" rel="noopener noreferrer"><i className='fab fas fa-portrait' /></a>
            <a href="https://github.com/stkterry/quelea" className="team-menu-per" target="_blank" rel="noopener noreferrer"><i className='fab fa-github-square' /></a>
            <a href="https://angel.co/stkterry" className="team-menu-per" target="_blank" rel="noopener noreferrer"><i className="fab fa-angellist" /></a>
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
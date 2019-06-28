import React from "react";
import { Link } from "react-router-dom";
import TeamMenu from "./team_menu/team_menu_container";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }


  render() {
    

    return (
      <div className="nav_bar">
        <TeamMenu />

        <h1>Threads</h1>

        <div id="nav_bar-channels">
          <h1>Channels</h1>
        </div>

        <div id="nav_bar-channel_form">
          <h1>Add a channel</h1>
        </div>

        <div id="nav_bar-direct_messages">
          <h1>Direct Messages</h1>
        </div>

        <div id="nav_bar-Apps">
          <h1>Apps</h1>
        </div>

        <h1>Sell your soul to Google</h1>

      </div>
    )
  }

}

export default NavBar;
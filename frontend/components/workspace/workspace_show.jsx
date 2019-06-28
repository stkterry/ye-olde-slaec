import React from "react";

import NavBar from "../nav_bar/nav_bar_container";

class WorkspaceShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div>
      //   <h1>Look alive sunshine, you're in the matrix now!</h1>
      //   {Object.keys(this.props.currentUser).map(key => [key, this.props.currentUser[key]])} 
      // </div>
      <nav className="workspace-contents">
        <div>
          <NavBar />
        </div>
      </nav>
    )
  }
}

export default WorkspaceShow;
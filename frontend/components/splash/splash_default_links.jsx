import React from "react";
import { Link, Redirect } from "react-router-dom";

class SplashDefaultLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  logoRedirect() {
    return <Redirect to="/" />
  }

  render() {
   
    return (
      <div>
        <div className="splash-header-logo">
          <a onClick={this.logoRedirect}>Slaec</a>
        </div>
        <ul className="splash-header-links">
          <li>Why Slack?</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Enterprise</li>
          <li>Pricing</li>
        </ul>
      </div>
    )

  }

}

export default SplashDefaultLinks;
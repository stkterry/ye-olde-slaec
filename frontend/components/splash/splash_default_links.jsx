import React from "react";
import { Link, Redirect } from "react-router-dom";

import SplashLogo from "./splash_logo";

class SplashDefaultLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <>
        <SplashLogo />
        <ul className="splash-header-links">
          <li>Why Slaec?</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Enterprise</li>
          <li>Pricing</li>
        </ul>
      </>
    )

  }

}

export default SplashDefaultLinks;
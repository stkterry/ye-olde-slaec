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
        <ul className="splash-header-ul">
          {/* <a href="https://steventerry.netlify.com/" className="nav-links-per">
            <h3>Steven Terry</h3>
            <i className="fas fa-portrait" />
          </a> */}
          <a href="https://steventerry.netlify.com/" className="splash-header-per" target="_blank" rel="noopener noreferrer"><i className='fab fas fa-portrait' /></a>
          <a href="https://github.com/stkterry/quelea" className="splash-header-per" target="_blank" rel="noopener noreferrer"><i className='fab fa-github-square' /></a>
          <a href="https://angel.co/stkterry" className="splash-header-per" target="_blank" rel="noopener noreferrer"><i className="fab fa-angellist" /></a>
          {/* <li>Why Slaec?</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Enterprise</li>
          <li>Pricing</li> */}
        </ul>
      </>
    )

  }

}

export default SplashDefaultLinks;
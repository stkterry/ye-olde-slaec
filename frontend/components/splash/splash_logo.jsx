import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";


const SplashLogo = () => (
  <div className="splash-header-logo">
    <Link to="/"><img src={window.logoURL}></img>slaec</Link>
  </div>
)

export default SplashLogo;
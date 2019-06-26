import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

// class SplashLogo extends React.Component {

//   constructor(props) {
//     super(props);

//     this.kick = this.kick.bind(this);
//   }

//   kick() {
//     // return console.log("hello")
//     return <Redirect to="/" />
//   }

//   render() {
//     return (
//       <div className="splash-header-logo">
//         <a onClick={this.kick}><img src={window.logoURL}></img>slaec</a>
//       </div>  
//     )
 
//   }
// }

const SplashLogo = () => (
  <div className="splash-header-logo">
    <Link to="/"><img src={window.logoURL}></img>slaec</Link>
  </div>
)

export default SplashLogo;
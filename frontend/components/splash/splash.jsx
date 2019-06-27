import React from "react";
import SplashDefaultLinks from "./splash_default_links";
// import SplashLogo from "./splash_logo";
import { Link } from "react-router-dom";
import myMove from "../../util/splash-animations";


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: ""};

    this.update = this.update.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value })
  }

  componentDidMount() {
    myMove("yellow-chat-icon");
  }

  render() {
    const { currentUser, logout } = this.props;

    const splashHeader = (currentUser) ? (
      <header className="splash-header">
        <SplashDefaultLinks />
        <nav className="splash-header-right">
          <button>Future Workspaces Button</button>
          <button onClick={logout}>Temp Logout Button</button>
        </nav>
      </header>
    ):(
      <header className="splash-header">
        <SplashDefaultLinks />
        <nav className="splash-header-right">
          <Link className="splash-header-login" to="/login">Sign In</Link>
          <Link className="splash-header-getstarted" id="splash-button" to="/signup">GET STARTED</Link>
        </nav>
      </header>
    );

    return (
      <div>
        { splashHeader }
        <div className="splash-body">
          <section className="splash-body-hero">

            <div className="splash-body-hero-content">
              <div className="splash-body-hero-background">
                <img src={window.yellowChatIconURL} className="hero-icon" id="yellow-chat-icon" />
                <img src={window.zendeskIconURL} className="hero-icon" id="zendesk-icon" />
                <img src={window.greenChatIconURL} className="hero-icon" id="green-chat-icon" />
                <img src={window.asanaIconURL} className="hero-icon" id="asana-icon" />
              </div>
              <header className="splash-body-hero-header">
                <h1>Whatever work you do, you can do it in Slaec</h1>
                <p id="h1-follower">Slaec gives your team the power and alignment you need to do your best work.</p>
                  <form className="splash-body-hero-header-form">
                    <input type="text" placeholder="Your work email"></input>
                    <Link id="splash-button" to="/signup">     TRY FOR FREE     </Link>
                  </form>
                <p id="form-follower">Already using Slaec? <Link to="/login">Sign in.</Link></p>
              </header>
            </div>

          </section>

          <section className="splash-body-section">
            <h2>Put collaboration at your fingertips</h2>
          </section>

        </div>



      </div>
    )
  }

}

export default Splash;
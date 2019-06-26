import React from "react";
// import SplashDefaultLinks 
import SplashLogo from "../splash/splash_logo";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(
      Object.assign({}, this.state)
    )
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => (
          <li className="session-error-message" key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {

    const {formType, errors} = this.props;

    const sessionForm = (
      <> 
        <h1>{ formType } to your workspace</h1>
        <p>Enter your email and password</p>
        <input 
          className="session-form-email"
          type="text"
          value={this.state.email}
          onChange={this.update("email")}
          placeholder="example@example.com"
        />
          <br/>
        <input
          className="session-form-password"
          type="password"
          value={this.state.password}
          onChange={this.update("password")}
          placeholder="Password"
        />
        <br />
        <input 
          className="session-form-login"
          id="splash-button"
          type="submit"
          onClick={this.handleSubmit}
          value={formType}       
        />
      </>
    )

    const errorMessages = (errors.length) ? this.renderErrors() : (<></>)

    const sessionStarter = formType === "Log In" ? (
      <nav className = "session-content">
        {errorMessages}
        <form className = "session-form">
          {sessionForm}
          <br></br>
          Demo users goes here?
        </form>
      </nav>
    ) : (
      <nav className="session-content">
        {errorMessages}
        <form className="session-form">
          {sessionForm}
        </form>
      </nav>
    )

    return (
      <div className="session-page">
        <div id="session-header">
        <header className="splash-header" id="login">
          <SplashLogo />
          <nav className="splash-header-right">
            <Link className="splash-header-login" to="/login">Sign In</Link>
            <Link className="splash-header-getstarted" id="splash-button" to="/signup">GET STARTED</Link>
          </nav>
        </header>
        </div>
        {sessionStarter}
      </div>
    )
  }
 
}

export default withRouter(SessionForm)
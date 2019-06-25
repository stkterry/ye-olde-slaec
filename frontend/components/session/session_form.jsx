import React from "react";
// import SplashDefaultLinks 
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
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {

    const {formType} = this.props;

    const sessionForm = (
      <> 
        <h1>{ formType }</h1>
        <h4> Enter your email and password</h4>
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
        <button 
            className="session-form-login"
            onClick={this.handleSubmit}
          >
            {formType}
        </button>
      </>
    )

    const sessionStarter = formtype === "Log In" ? (
      <nav className = "session-content">
        {this.renderErrors()}
      <form className = "session-form">
        {sessionForm}
        {/* Demo users goes here? */}
      </form>
      </nav>
    ) : (
      <nav className="session-content">
        {this.renderErrors()}
        <form className="session-form">
          {sessionForm}
        </form>
      </nav>
    )

    return (
      <div>
        <header className="splash-header">

          <nav className="splash-session-nav">
            <Link to="/login">Log In</Link>
            <Link to="/signup">GET STARTED</Link>
          </nav>
        </header>
        {sessionStarter}
      </div>
    )
  }
 
}

export default withRouter(SessionForm)
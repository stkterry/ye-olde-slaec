import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const loggedInMessage = () => (
    <div className="loggedInMessage">
      <h3 className="loggedInMessage-H3">
        Greeting Test, {currentUser.username}
      </h3>
      <button
        className="loggedInMessage-button"
        onClick={logout}
      >Logout!
      </button>
    </div>
  )
  const loggedOutMessage = () => (
    <nav className="loggedOutMessage">
      <Link to="/login">Login</Link>
      <p> or </p>
      <Link to="/logout">Logout</Link>
    </nav>
  )

  return currentUser ? loggedInMessage() : loggedOutMessage();

};

export default Greeting;
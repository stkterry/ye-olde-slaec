
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log In',
  linkTo: <Link to="/signup"> Sign up</Link>
});

const mDP = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
})

export default connect(mSP, mDP)(SessionForm);
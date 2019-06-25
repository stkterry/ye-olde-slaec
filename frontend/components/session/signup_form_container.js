
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  linkTo: <Link to="/login"> Sign up</Link>
});

const mDP = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
})

export default connect(mSP, mDP)(SessionForm);
import { 
  postUser,
  deleteUser,
  postSession,
  deleteSession
 } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const DELETE_CURRENT_USER = 'DELETE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const deleteCurrentUser = () => ({
  type: DELETE_CURRENT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
});

export const signup = user => dispatch => postUser(user)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  )

export const rmAccount = userId => dispatch => deleteUser(userId)
  .then(
    () => dispatch(deleteCurrentUser()),
    errors => dispatch(receiveErrors(errors))
  )

export const login = user => dispatch => postSession(user)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  )

export const logout = () => dispatch => deleteSession()
  .then(
    () => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors))
  )




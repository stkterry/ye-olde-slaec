import {
  getUsers,
  getUser,
  patchUser
} from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users: users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user
});

export const fetchUsers = () => dispatch => getUsers()
  .then( users => dispatch(receiveAllUsers(users)))

export const fetchUser = id => dispatch => getUser(id)
  .then ( user => dispatch(receiveUser(user)));

export const updateUser = user => dispatch => patchUser(user)
  .then( user => dispatch(receiveUser(user)));
import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USER';
const CREATE_USER = 'CREATE_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';

/**
 * ACTION CREATORS
 */
const _getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

const _createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

const _deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id,
  };
};

const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

/**
 * THUNK CREATORS
 */
export const getUsers = () => {
  return async (dispatch) => {
    const users = (await axios.get('/api/users')).data;
    dispatch(_getUsers(users));
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    const newUser = (await axios.post('/api/users', user)).data;
    dispatch(_createUser(newUser));
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/users/${id}`);
    dispatch(_deleteUser(id));
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    user = (await axios.put(`/api/users/${user.id}`, user)).data;
    dispatch(_updateUser(user));
  };
};

/**
 * REDUCER
 */

export const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case CREATE_USER:
      return [...state, action.user];
    case DELETE_USER:
      return state.filter((user) => user.id !== action.id);
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );
    default:
      return state;
  }
};

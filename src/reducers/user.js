// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SET_USER_VALUE } from '../actions';

const initialStateUser = {
  email: '',
};

const user = (state = initialStateUser, action) => {
  switch (action.type) {
  case SET_USER_VALUE:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};

export default user;

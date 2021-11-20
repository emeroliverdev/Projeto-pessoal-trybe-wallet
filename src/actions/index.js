// Coloque aqui suas actions

export const SET_USER_VALUE = 'SET_USER_VALUE';

export const setUserValue = (email) => ({
  type: SET_USER_VALUE, email,
});

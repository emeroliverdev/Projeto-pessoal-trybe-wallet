// Coloque aqui suas actions

export const SET_USER_VALUE = 'SET_USER_VALUE';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const setUserValue = (email) => ({
  type: SET_USER_VALUE, email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES, currencies,
});

// Coloque aqui suas actions
import fetchCurrency from './fecthAPI';

export const SET_USER_VALUE = 'SET_USER_VALUE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';

export const setUserValue = (email) => ({
  type: SET_USER_VALUE, email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES, currencies,
});

export const setWalletValue = (expensive) => ({
  type: SET_WALLET_VALUE, expensive,
});

export const actionFetchCurrencies = () => (dispatch) => {
  fetchCurrency()
    .then((response) => dispatch(getCurrencies(response)));
};

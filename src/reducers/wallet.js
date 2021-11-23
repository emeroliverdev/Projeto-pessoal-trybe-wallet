// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCIES, SET_WALLET_VALUE } from '../actions';

const initialStateWallet = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialStateWallet, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return ({
      ...state,
      currencies: action.currencies,
    });
  case SET_WALLET_VALUE:
    return ({
      ...state,
      expenses: [...state.expenses, action.expensive],
    });
  default:
    return state;
  }
};

export default wallet;

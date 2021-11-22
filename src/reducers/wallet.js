// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCIES } from '../actions';

const initialStateWallet = {
  currencies: 'USD',
};

const wallet = (state = initialStateWallet, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return ({
      currencies: action.currencies,
    });
  default:
    return state;
  }
};

export default wallet;

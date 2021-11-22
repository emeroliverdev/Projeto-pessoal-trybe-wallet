import React from 'react';
import './wallet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrency from '../actions/fecthAPI';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpenses: 0,
    };
  }

  componentDidMount() {
    const { objCurrencies } = this.props;
    fetchCurrency().then((response) => objCurrencies(response));
  }

  render() {
    const { email, currencies } = this.props;
    const { totalExpenses } = this.state;
    return (
      <header>
        <div className="container-header">
          <div className="email-totalExpenses">
            <span data-testid="email-field">{ `Email: ${email}`}</span>
            <span data-testid="total-field">
              { `Despesas totais: R$ ${totalExpenses}` }
            </span>
          </div>
          <div className="header-menu">
            <label htmlFor="select-currency">
              Moeda
              <select id="select-currency" data-testid="header-currency-field">
                { Object.entries(currencies).map((element) => (
                  <option key={ element[1].name }>{ element[1].code }</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispath) => ({
  objCurrencies: (state) => dispath(getCurrencies(state)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

import React from 'react';
import './wallet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFetchCurrencies } from '../actions';
import Form from '../components/form';
import Table from '../components/table';

class Wallet extends React.Component {
  componentDidMount() {
    const { objCurrencies } = this.props;
    objCurrencies();
  }

  render() {
    // Lógica de soma das despesas: Referência - código do colega Raphael Taglialegna
    const { email, expenses } = this.props;
    const totalExpenses = parseFloat(expenses.reduce((acc, curr) => {
      const { currency, exchangeRates } = curr;
      const cotation = exchangeRates[currency].ask;
      const conversion = parseInt(curr.value, Number) * cotation;
      return acc + conversion;
    }, 0)).toFixed(2);
    return (
      <header>
        <div className="container-header">
          <div className="email-totalExpenses">
            <span data-testid="email-field">{ `Email: ${email}`}</span>
            <span data-testid="total-field">
              { `Despesas totais: R$ ${totalExpenses}` }
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
          <Form />
          <Table />
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispath) => ({
  objCurrencies: () => dispath(actionFetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

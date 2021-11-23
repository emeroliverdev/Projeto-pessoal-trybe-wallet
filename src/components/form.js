import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormInitial from './formInitial';
import Selects from './selects';
import './form.css';
import { actionFetchCurrencies, setWalletValue } from '../actions/index';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.btnSaveExpenses = this.btnSaveExpenses.bind(this);
  }

  btnSaveExpenses() {
    const { dispatchExpenses, getCurrencies } = this.props;
    const { id } = this.state;
    getCurrencies();
    dispatchExpenses(this.state);
    this.setState({
      id: id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { currencies } = this.props;
    this.setState({
      [name]: value,
      exchangeRates: currencies,
    });
  }

  render() {
    const { value, description, tag, method, currency } = this.state;
    const { currencies } = this.props;

    return (
      <form className="form">
        <div className="div-form">
          <FormInitial
            onChange={ this.handleChange }
            value={ value }
            description={ description }
          />
          <select
            data-testid="currency-input"
            type="text"
            placeholder="Moeda $"
            className="value-input"
            onChange={ this.handleChange }
            value={ currency }
            name="currency"
          >
            { Object.entries(currencies).map((element) => (
              element[0] !== 'USDT' ? (
                <option
                  key={ element[1].name }
                  value={ element[1].code }
                >
                  { element[1].code }
                </option>)
                : null))}
          </select>
          <Selects
            onChange={ this.handleChange }
            tag={ tag }
            method={ method }
          />
          <button
            type="button"
            className="btn-addExpense"
            onClick={ () => this.btnSaveExpenses() }
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(actionFetchCurrencies()),
  dispatchExpenses: (state) => dispatch(setWalletValue(state)),
});

Form.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  dispatchExpenses: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

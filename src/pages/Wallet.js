import React from 'react';
import './wallet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpenses: 0,
      currency: '',
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses, currency } = this.state;
    return (
      <div>
        <header>
          <div className="email-totalExpenses">
            <div className="a">
              <span data-testid="email-field">{ `Email: ${email}`}</span>
              <span data-testid="total-field">
                { `Despesas totais: R$ ${totalExpenses}` }
              </span>
            </div>
            <div>
              <label htmlFor="select-currency">
                Moeda:
                <select
                  id="select-currency"
                  data-testid="header-currency-field"
                >
                  <option>{ currency }</option>
                </select>
              </label>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
}.isRequired;

export default connect(mapStateToProps)(Wallet);

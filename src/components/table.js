import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        <table>
          <colgroup span="7" />
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { expenses
            ? (expenses.map((element) => {
              const { currency, exchangeRates } = element;
              return (
                <tr key={ element.id }>
                  <td>{ element.description }</td>
                  <td>{ element.tag }</td>
                  <td>{ element.method }</td>
                  <td>{ element.value }</td>
                  <td>{ exchangeRates[currency].name }</td>
                  <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                  <td>
                    { (element.value * parseFloat(exchangeRates[currency].ask))
                      .toFixed(2) }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      type="button"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })) : null}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);

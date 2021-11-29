import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions/index';

class Table extends Component {
  constructor(props) {
    super(props);
    this.btnDeleteExpense = this.btnDeleteExpense.bind(this);
  }

  btnDeleteExpense(id) {
    const { expenses, keyDeleteExpense } = this.props;
    const selectExpense = expenses.filter((element) => element.id !== id);
    keyDeleteExpense(selectExpense);
  }

  render() {
    const { expenses } = this.props;
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
                      onClick={ () => this.btnDeleteExpense(element.id) }
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

const mapDispatchToProps = (dispatch) => ({
  keyDeleteExpense: (expense) => dispatch(deleteExpense(expense)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  deleteExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);

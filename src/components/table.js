import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './table.css';
import Buttons from './Buttons';

class Table extends Component {
  // Pesquisa sobre as tags a ser utilizadas na tabela:
  // https://www.infowester.com/tagsdesconhecidas2.php
  render() {
    const { expenses } = this.props;
    return (
      <div className="div-table">
        <table className="table">
          <thead className="table-head">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </thead>
          { expenses
            ? (expenses.map((element) => {
              const { currency, exchangeRates } = element;
              return (
                <tbody key={ element.id } className="table-body">
                  <tr key={ element.id } className="tr-body">
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
                      <Buttons id={ element.id } />
                    </td>
                  </tr>
                </tbody>
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
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(Table);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TiEdit } from 'react-icons/ti';
import { RiDeleteBinFill } from 'react-icons/ri';
import { deleteExpense } from '../actions';
import './buttons.css';

class Buttons extends Component {
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
    const { id } = this.props;
    return (
      <div className="buttons">
        <button
          data-testid="delete-btn"
          type="button"
          onClick={ () => this.btnDeleteExpense(id) }
          className="btn-excluir"
        >
          <RiDeleteBinFill />
          {' '}
          Excluir
        </button>
        <button
          data-testId="edit-btn"
          type="button"
          className="btn-editar"
        >
          <TiEdit />
          {' '}
          Editar
        </button>
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

Buttons.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  deleteExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

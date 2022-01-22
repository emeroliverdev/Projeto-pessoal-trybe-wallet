import React, { Component } from 'react';
import './selects.css';
import PropTypes from 'prop-types';

class Selects extends Component {
  render() {
    const { onChange, tag, method } = this.props;
    return (
      <>
        <label htmlFor="method" className="label-form">
          Forma de Pgto &nbsp;
          <select
            data-testid="method-input"
            className="select"
            onChange={ onChange }
            value={ method }
            name="method"
            id="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" className="label-form">
          Tag &nbsp;
          <select
            data-testid="tag-input"
            className="select"
            onChange={ onChange }
            value={ tag }
            name="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

Selects.propTypes = {
  onChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
}.isRequired;

export default Selects;

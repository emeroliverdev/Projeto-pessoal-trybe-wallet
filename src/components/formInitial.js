import React, { Component } from 'react';
import './formInitial.css';
import PropTypes from 'prop-types';

class FormInitial extends Component {
  render() {
    const { value, description, onChange } = this.props;
    return (
      <>
        <label htmlFor="form-valor" className="label-form">
          Valor &nbsp;
          <input
            data-testid="value-input"
            type="number"
            placeholder="Valor R$"
            className="value-input"
            onChange={ onChange }
            value={ value }
            name="value"
            id="form-valor"
          />
        </label>
        <label htmlFor="form-descricao" className="label-form">
          Descrição &nbsp;
          <input
            data-testid="description-input"
            type="text"
            placeholder="Descrição despesa"
            className="description-input"
            onChange={ onChange }
            value={ description }
            name="description"
            id="form-descricao"
          />
        </label>
      </>
    );
  }
}

FormInitial.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}.isRequired;

export default FormInitial;

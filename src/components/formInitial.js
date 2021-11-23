import React, { Component } from 'react';
import './formInitial.css';
import PropTypes from 'prop-types';

class FormInitial extends Component {
  render() {
    const { value, description, onChange } = this.props;
    return (
      <>
        <input
          data-testid="value-input"
          type="number"
          placeholder="Valor R$"
          className="value-input"
          onChange={ onChange }
          value={ value }
          name="value"
        />
        <input
          data-testid="description-input"
          type="text"
          placeholder="Descrição despesa"
          className="description-input"
          onChange={ onChange }
          value={ description }
          name="description"
        />
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

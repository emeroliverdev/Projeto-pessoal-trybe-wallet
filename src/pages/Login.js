import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserValue } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
  }

  onSubmitInfo() {
    const { history, dispatchUserValue } = this.props;
    const { email } = this.state;
    dispatchUserValue(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const minLength = 6;
    // Regex retirado do site:
    // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const validemail = /\S+@\S+\.\S+/;
    return (
      <div className="login-page-global">
        <div className="login-page">
          <input
            className="input-email"
            type="email"
            data-testid="email-input"
            placeholder="e-mail"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            autoComplete="off"
          />
          <input
            className="input-password"
            type="password"
            data-testid="password-input"
            placeholder="Password"
            onChange={ this.handleChange }
            value={ password }
            name="password"
          />
          <button
            className="btn-login"
            type="button"
            onClick={ this.onSubmitInfo }
            disabled={ password.length < minLength
            || email.search(validemail) !== 0 }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserValue: (state) => dispatch(setUserValue(state)),
});

Login.propTypes = {
  dispatchUserValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

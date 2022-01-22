import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserValue } from '../actions';
import TrybeWallet from './imagem/TrybeWallet.jpg';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
    this.btnDisabled = this.btnDisabled.bind(this);
  }

  onSubmitInfo() {
    const { history, dispatchUserValue } = this.props;
    const { email } = this.state;
    dispatchUserValue(email);
    history.push('/carteira');
    document.body.style.backgroundColor = 'white';
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.btnDisabled());
  }

  btnDisabled() {
    const { password, email } = this.state;
    const minLength = 6;
    const validemail = /\S+@\S+\.\S+/;
    const el = document.getElementsByTagName('button')[0];
    if (password.length < minLength
      || email.search(validemail) !== 0) {
      el.classList.remove('btn-able');
      el.classList.add('btn-disabled');
      this.setState({
        isDisabled: true,
      });
    } else {
      el.classList.remove('btn-disabled');
      el.classList.add('btn-able');
      this.setState({
        isDisabled: false,
      });
    }
  }

  render() {
    const { email, password, isDisabled } = this.state;
    // Regex:https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    // const validemail = /\S+@\S+\.\S+/;
    return (
      <div className="login-page-global">
        <img src={ TrybeWallet } alt={ TrybeWallet } className="img-trybewallet" />
        <div className="login-page">
          <label htmlFor="input-email">
            <p>E-mail</p>
            <input
              className="input-email"
              type="email"
              data-testid="email-input"
              placeholder="seu-email@email.com"
              onChange={ this.handleChange }
              value={ email }
              name="email"
              autoComplete="off"
              id="input-email"
            />
          </label>
          <label htmlFor="input-password">
            <p>Senha</p>
            <input
              className="input-password"
              type="password"
              data-testid="password-input"
              placeholder="Digite sua senha"
              onChange={ this.handleChange }
              value={ password }
              name="password"
              id="input-password"
            />
          </label>
          <button
            className="btn-disabled"
            type="button"
            onClick={ this.onSubmitInfo }
            disabled={ isDisabled }
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

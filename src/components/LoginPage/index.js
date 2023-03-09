import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function LoginForm() {
  const [ addClassEmail, setAddClassEmail ] = useState(false);
  const [ addClassPassword, setAddClassPassword ] = useState(false);

  return (
    <div className='register-form-container'>

      <div className='register-form-main'>

        <div className='register-form-content'>
          <div className='register-form-content-top'>
            <div className='register-out'>
                <h2>Entre com <br/>suas redes sociais</h2>
                <div className='register-out-btns'>
                  <Link to="/" className='register-fb'>Facebook</Link>
                  <Link to="/" className='register-gl'>Google</Link>
                  <Link to="/" className='register-ap'>Apple</Link>
                </div>
            </div>
            <div className='form-line'></div>
            <div className='register-email'>
                <h2>Digite o seu <br/>e-mail e senha</h2>
                <form>
                  <div className={`register-input ${addClassEmail ? 'register-input-active-email' : ''}`} onFocus={() => setAddClassEmail(!addClassEmail)}>
                    <input type="email" id='email'/>
                    <label for='email'>Digite seu e-mail</label>
                  </div>
                  <div className={`register-input ${addClassPassword ? 'register-input-active-password' : ''}`} onFocus={() => setAddClassPassword(!addClassPassword)}>
                    <input type="password" id='password'/>
                    <label for='password'>Senha</label>
                  </div>
                  <button>Entrar</button>
                </form>
            </div>
          </div>
          <div className='register-form-bottom'>
            <p>Não tem conta?</p>
            <Link to="/login/registro">Crie a sua</Link>
          </div>
        </div>

        <div className='register-redirection'>
          <img src="https://www.webmotors.com.br/login/assets/img/icons/help.svg" alt="icon" />
          <p>Precisa de ajuda?</p>
          <Link to="/">Fale com a gente</Link>
        </div>
      </div>
      
    </div>
  )
}

export default LoginForm
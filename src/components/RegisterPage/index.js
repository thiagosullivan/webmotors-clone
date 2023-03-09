import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function RegisterForm() {
  const [ addClassEmail, setAddClassEmail ] = useState(false);
  const [ addClassPassword, setAddClassPassword ] = useState(false);
  
  
  return (
    <div className='register-form-container'>

      <div className='register-form-main'>

        <div className='register-form-content'>
          <div className='register-form-content-top'>
            <div className='register-out'>
                <h2>Cadastre-se com <br/>suas redes sociais</h2>
                <div className='register-out-btns'>
                  <Link to="/" className='register-fb'>Facebook</Link>
                  <Link to="/" className='register-gl'>Google</Link>
                  <Link to="/" className='register-ap'>Apple</Link>
                </div>
            </div>
            <div className='form-line'></div>
            <div className='register-email'>
                <h2>Crie uma conta <br/>com seu e-mail</h2>
                <form>
                  <div className={`register-input ${addClassEmail ? 'register-input-active-email' : ''}`} onFocus={() => setAddClassEmail(!addClassEmail)}>
                    <input type="email" id='email'/>
                    <label for='email'>Digite seu e-mail</label>
                  </div>
                  <div className={`register-input ${addClassPassword ? 'register-input-active-password' : ''}`} onFocus={() => setAddClassPassword(!addClassPassword)}>
                    <input type="password" id='password'/>
                    <label for='password'>Senha</label>
                  </div>
                  <button>Criar conta</button>
                </form>
            </div>
          </div>
          <div className='register-form-bottom'>
            <p>Já tem uma conta?</p>
            <Link to="/login">Entrar</Link>
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

export default RegisterForm
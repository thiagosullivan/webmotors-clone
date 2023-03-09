import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginPage';
import './styles.scss';

function Login() {
  return (
    <div className='login-page'>
      <Header />
      <main>
        <div className='login-bg'>
        </div>
        <LoginForm />
      </main>
      <Footer />
    </div>
  )
}

export default Login
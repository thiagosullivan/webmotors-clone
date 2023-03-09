import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RegisterForm from '../../components/RegisterPage';
import './styles.scss';

function RegisterPage() {
  return (
    <div className='register-page'>
      <Header />
      <main>
        <div className='register-bg'>
        </div>
        <RegisterForm />
      </main>
      <Footer />
    </div>
  )
}

export default RegisterPage
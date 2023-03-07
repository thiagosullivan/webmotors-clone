import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function HomeOptions() {
  return (
    <div className='home-options maxContent'>
        <h2>Na Webmotors</h2>
        <div className='home-options-content'>
          <Link to="/">Financiamento</Link>
          <Link to="/">Vender carro</Link>
          <Link to="/">Catálogo 0km</Link>
          <Link to="/">Seguro veículo</Link>
          <Link to="/">Tabela FIPE</Link>
          <Link to="/">Notícias WM1</Link>
        </div>
    </div>
  )
}

export default HomeOptions
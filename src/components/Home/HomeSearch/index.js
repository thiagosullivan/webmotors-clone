import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.scss';

function HomeSearch() {
  return (
    <div className='home-search'>
        <div>
            <Link to="/">Comprar carros</Link>
            <Link to="/">Comprar motos</Link>
            <Link to="/">Quero vender</Link>
            <Link to="/">Quero financiar</Link>
        </div>
        <form>
            <div className='home-search-input'>
                <AiOutlineSearch />
                <input type='text' placeholder='Digite marca ou modelo do carro'/>
            </div>
            <button>Ver Ofertas (389.182)</button>
        </form>
    </div>
  )
}

export default HomeSearch
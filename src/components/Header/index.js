import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteIcon, Logo, NotificationIcon, ProposalIcon, UserLoginIcon } from '../../Images/Icons'
import "./styles.scss";

function Header() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <Link to="/">
                <Logo />
            </Link>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Comprar</Link></li>
                <li><Link to="/">Vender</Link></li>
                <li><Link to="/">Serviços</Link></li>
                <li><Link to="/">Notícias WM1</Link></li>
                <li><Link to="/">Ajuda</Link></li>
            </ul>
        </nav>
        <div className='header-login'>
            <div className='header-login-div'>
                <UserLoginIcon />
                <p>Entrar</p>
            </div>
            <Link to="/">
                <FavoriteIcon />
            </Link>
            <Link to="/">
                <ProposalIcon />
            </Link>
            <Link to="/">
                <NotificationIcon />
            </Link>
        </div>
    </div>
  )
}

export default Header
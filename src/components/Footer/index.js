import React from 'react';
import { Link } from 'react-router-dom';
import { SantanderLogo } from '../../Images/Icons';
import './styles.scss';

function Footer() {
  return (
    <footer id="footer">
        <div className='footer-top'>
            <Link to="/">
                <p>Nossos canais de atendimento são 100% digitais. Precisa de ajuda?</p>
                <strong>Clique Aqui</strong>
            </Link>
        </div>
        <div className='footer-middle'>
            <nav>
                <div className='footer-middle-col1'>
                    <div>
                        <h3>Comprar</h3>
                        <ul>
                            <li><Link to="/">Carros usados</Link></li>
                            <li><Link to="/">Carros novos</Link></li>
                            <li><Link to="/">Motos usadas</Link></li>
                            <li><Link to="/">Motos novas</Link></li>
                            <li><Link to="/">Compra certificada</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Vender</h3>
                        <ul>
                            <li><Link to="/">Vender carro</Link></li>
                            <li><Link to="/">Vender moto</Link></li>
                            <li><Link to="/">Gerenciar meu anúncio</Link></li>
                            <li><Link to="/">Plataforma revendedores</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-middle-col2'>
                    <h3>Serviços</h3>
                    <ul>
                        <li><Link to="/">Tabela FIPE</Link></li>
                        <li><Link to="/">Financiamento</Link></li>
                        <li><Link to="/">Catálogo 0km</Link></li>
                        <li><Link to="/">Compra certificada</Link></li>
                        <li><Link to="/">Plataforma revendedores</Link></li>
                        <li><Link to="/">Seguro veículo</Link></li>
                        <li><Link to="/">Autoinsights</Link></li>
                        <li><Link to="/">Publicidade</Link></li>
                        <li><Link to="/">Comprar veículos</Link></li>
                        <li><Link to="/">Multas e Débitos</Link></li>
                    </ul>
                </div>
                <div className='footer-middle-col3'>
                    <h3>Notícias WM1</h3>
                    <ul>
                        <li><Link to="/">Portal</Link></li>
                        <li><Link to="/">Últimas notícias</Link></li>
                        <li><Link to="/">Testes</Link></li>
                        <li><Link to="/">Comparativos</Link></li>
                        <li><Link to="/">Vídeos</Link></li>
                        <li><Link to="/">Motos</Link></li>
                        <li><Link to="/">Segredos</Link></li>
                        <li><Link to="/">Dicas</Link></li>
                        <li><Link to="/">Bolso</Link></li>
                    </ul>
                </div>
                <div className='footer-middle-col4'>
                    <h3>Ajuda</h3>
                    <ul>
                        <li><Link to="/">Para você</Link></li>
                        <li><Link to="/">Para a sua loja</Link></li>
                        <li><Link to="/">Segurança</Link></li>
                        <li><Link to="/">Sobre nós</Link></li>
                        <li><Link to="/">Trabalhe com a gente</Link></li>
                        <li><Link to="/">Mapa do site</Link></li>
                    </ul>
                </div>
                <div className='footer-middle-col5'>
                    <h3>Institucional</h3>
                    <ul>
                        <li><Link to="/">Canal de ética</Link></li>
                        <li><Link to="/">Código de conduta Webmotors</Link></li>
                        <li><Link to="/">Código de defesado consumidor</Link></li>
                        <li><Link to="/">Gerenciamento de cookies</Link></li>
                        <li><Link to="/">Política de privacidade</Link></li>
                        <li><Link to="/">Termos de uso</Link></li>
                        <li><Link to="/">LGPD</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className='footer-owner'>
            <div className='maxContent'>
                <p>Uma empresa</p>
                <SantanderLogo />
            </div>
        </div>
        <div className='footer-bottom'>
            <p>© 1995-2023 Webmotors S.A. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer
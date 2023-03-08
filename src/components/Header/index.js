import React from 'react'
import { Link } from 'react-router-dom'
import { CarSafety, CertifiedPurchase, Comparison, FavoriteIcon, Financing, FipeTable, Logo, ManageAd, NavSecurity, NavShop, NavUser, NewBike, NewCar, News, NotificationIcon, OldBike, Portal, ProposalIcon, Secrets, SellBike, SellCar, SellerPlataform, Tests, Tips, UsedCar, UserLoginIcon, Videos, Wallet, ZeroKm } from '../../Images/Icons'
import "./styles.scss";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
// import { CaretDownIcon } from '@radix-ui/react-icons';

function Header() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <Link to="/">
                <Logo />
            </Link>
        </div>
        {/* <nav>
            <ul>
                <li><Link to="/">Comprar</Link></li>
                <li><Link to="/">Vender</Link></li>
                <li><Link to="/">Serviços</Link></li>
                <li><Link to="/">Notícias WM1</Link></li>
                <li><Link to="/">Ajuda</Link></li>
            </ul>
        </nav> */}

        <NavigationMenu.Root className='header-nav'>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>
                        Comprar
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className='header-nav-sub header-nav-buy'>
                        <ListItem className='header-nav-sub-item' href="/">
                            <UsedCar />
                            Carros usados
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <NewCar />
                            Carros novos
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <OldBike />
                            Motos usadas
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <NewBike />
                            Motos novas
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <CertifiedPurchase />
                            Compra certificada
                        </ListItem>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>
                        Vender
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className='header-nav-sub header-nav-sell'>
                        <ListItem className='header-nav-sub-item' href="/">
                            <SellCar />
                            Vender carro
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <SellBike />
                            Vender moto
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <ManageAd />
                            Gerenciar meu anúncio
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <SellerPlataform />
                            Plataforma de revendedores
                        </ListItem>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>
                        Serviços
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className='header-nav-sub header-nav-services'>
                        <ListItem className='header-nav-sub-item' href="/">
                            <FipeTable />
                            Tabela FIPE
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <Financing />
                            Financiamento
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <ZeroKm />
                            Catálogo 0km
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <CertifiedPurchase />
                            Compra certificada
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <SellerPlataform />
                            Plataforma de revendedores
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <CarSafety />
                            Seguro veículo
                        </ListItem>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>
                        Notícias WM1
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className='header-nav-sub header-nav-news'>
                        <ListItem className='header-nav-sub-item' href="/">
                            <Portal />
                            Portal
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <News />
                            Últimas notícias
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <Tests />
                            Testes
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <Comparison />
                            Comparativos
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <Videos />
                            Vídeos
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <OldBike />
                            Motos
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <Secrets />
                            Segredos
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <Tips />
                            Dicass
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <Wallet />
                            Bolso
                        </ListItem>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>
                        Ajuda
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className='header-nav-sub header-nav-help'>
                        <ListItem className='header-nav-sub-item' href="/">
                            <NavUser />
                            Para você
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <NavShop />
                            Para sua loja
                        </ListItem>
                        <ListItem className='header-nav-sub-item' href="/">
                            <NavSecurity />
                            Segurança
                        </ListItem>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator />
            </NavigationMenu.List>

            <NavigationMenu.Viewport />
        </NavigationMenu.Root>


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

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ));

export default Header
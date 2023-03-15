import React, { useState } from "react";
import { Link } from "gatsby";
import '../styles/mainMenu.css';

export default function MainMenu() {
    const [menuState, setMenuState] = useState('');

    const menuShow = () => {
        setMenuState('show');
    }

    const menuHide = () => {
        setMenuState('');
    }

    return (
        <div>
            <div className={menuState === 'show' ? 'modal-show' : 'modal-container'}>
                <div className={menuState === 'show' ? 'menu-links-mobile menu-links-mobile-show' : 'menu-links-mobile'}>
                    <div className='menu-card-item'>
                        <h1>E-commerce</h1>
                        <ul>
                            <li><Link to='/funcionalidades'>Funcionalidades</Link></li>
                            <li><Link to='/temas'>Temas</Link></li>
                            <li><Link to='/aplicativos'>Aplicativos</Link></li>
                            <li><Link to='/componentes-plugin'>Componentes Plug-In</Link></li>
                            <li><Link to='/comercio-b2c'>Comércio B2C</Link></li>
                            <li><Link to='/comercio-b2b'>Comércio B2B</Link></li>
                        </ul>
                    </div>
                    <div className='menu-card-item'>
                        <h1>Institucional</h1>
                        <ul>
                            <li><Link to='/sobre'>Sobre a Conectiza</Link></li>
                            <li><Link to='/carreira'>Carreira</Link></li>
                            <li><Link to='/cases'>Cases</Link></li>
                            <li><Link to='/treinamentos'>Treinamentos</Link></li>
                            <li><Link to='/conectcast'>ConectCast</Link></li>
                        </ul>
                    </div>
                    <div className='menu-card-item'>
                        <h1>Atendimento</h1>
                        <ul>
                            <li><a href="#">Ajuda</a></li>
                            <li><a href="#">Perguntas frequentes</a></li>
                            <li><a href="#">Contato comercial</a></li>
                        </ul>
                    </div>
                </div>
            </div>            
            <div className="container-lg">
                <div className="row mx-2 mx-sm-0">
                    <div className="col">
                        <div className='main-menu'>
                            <Link to='/'><img src='/conectiza-gatsby/images/conectiza-logo.svg' alt="logotipo conectiza"></img></Link>
                            <ul className='menu-links'>
                                <li><Link to="/sobre">sobre</Link></li>
                                <li><Link to="/solucoes">soluções</Link></li>
                                <li><Link to="/cases">cases</Link></li>
                                <li><Link to="/carreira">carreira</Link></li>
                                <li><Link to="#">contato</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={menuState === 'show' ? 'toggle-button' : 'toggle-button'} onClick={menuState === '' ? menuShow : menuHide}>
                <div className={menuState === 'show' ? 'bar1 bar1-animate' : 'bar1'}></div>
                <div className={menuState === 'show' ? 'bar2 bar2-animate' : 'bar2'}></div>
                <div className={menuState === 'show' ? 'bar1 bar3-animate' : 'bar1'}></div>
            </div>
            </div>
        </div>

    )
}

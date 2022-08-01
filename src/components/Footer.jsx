import React from "react";
import { Link } from "gatsby";
import '../styles/footer.css';

export default function Footer() {
    return (
        <div className="container-lg mt-5">
            <div className="row mt-5 mx-2 gx-5">
                <div className="col-lg-3 col-md-12 mb-4">
                    <div className="footer-title">
                        <Link to='/'><img src='images/conectiza-logo-2.svg' alt="logotipo conectiza"></img></Link>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa, necessitatibus.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
                    <div className='footer-card-item'>
                        <h1>Loja online</h1>
                        <ul>
                            <li><Link to='/funcionalidades'>Funcionalidades</Link></li>
                            <li><Link to='/temas'>Temas</Link></li>
                            <li><Link to='/aplicativos'>Aplicativos</Link></li>
                            <li><Link to='/componentes-plugin'>Componentes Plug-In</Link></li>
                            <li><Link to='/comercio-b2c'>Comércio B2C</Link></li>
                            <li><Link to='/comercio-b2b'>Comércio B2B</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
                    <div className='footer-card-item'>
                        <h1>Institucional</h1>
                        <ul>
                            <li><Link to='/sobre'>Sobre a Conectiza</Link></li>
                            <li><Link to='/carreira'>Carreira</Link></li>
                            <li><Link to='/cases'>Cases</Link></li>
                            <li><Link to='/treinamentos'>Treinamentos</Link></li>
                            <li><Link to='/conectcast'>ConectCast</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mb-4">
                    <div className='footer-card-item'>
                        <h1>Atendimento</h1>
                        <ul>
                            <li><a href="#">Ajuda</a></li>
                            <li><a href="#">Perguntas frequentes</a></li>
                            <li><a href="#">Contato comercial</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mx-2">
                <div className="col">
                    <footer className="text-center">
                        <h6>2022 © CONECTIZA Tecnologia</h6>
                    </footer>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { Link } from "gatsby";
import '../styles/footer.css';

export default function Footer() {
    return (
        <section className="footer">
            <div className="container-lg mb-5">
                <div className="row mx-3 mx-sm-0">
                    <div className="col por-dentro">
                        <h1>Fique por dentro do mundo e-commerce</h1>
                        <div>
                            <input type="email" name="email" id='email' placeholder="E-mail *"></input>
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="container-lg">
                    <div className="row mx-3 mx-sm-0 mt-5 ">
                        <div className="col-xl-3 col-lg-12 mb-5">
                            <div className="footer-title">
                                <Link to='/'><img src='/conectiza-gatsby/images/conectiza-footer.svg' alt="logotipo conectiza"></img></Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 mb-5 gx-5">
                            <div className='footer-card-item'>
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
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 mb-5 gx-5">
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
                        <div className="col-xl-3 col-md-4 mb-4 footer-card-item">
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
                </div>
            </div>
            <div className="container-lg">
                <div className="row mx-3 mx-sm-0">
                    <div className="col">
                        <footer className="text-center">
                            <h6>Copyright © 2023 - CONECTIZA TECNOLOGIA LTDA - CNPJ: 30.107.038/0001-29</h6>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
}
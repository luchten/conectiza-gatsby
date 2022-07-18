import React from "react"
import MainMenu from '../components/MainMenu';
import '../styles/home.css';
import solucaoCardInfo from '../script/solucaoCard';
import headlessCardInfo from '../script/headlessCard';
import marcasInfo from '../script/marcas';
import { createSolucaoCard, createHeadlessCard, createMarcas } from '../script/createFunctions';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>      
      <section className='header'>
        <div className='main-menu-div'>
          <MainMenu />
        </div>
        <div className="container-lg">
          <div className="row mx-2 mx-sm-0 justify-content-center align-items-center">
            <div className="col-lg-6 mt-5">
              <div className='conectiza-title'>
                <h1>Construímos ideias digitais poderosas</h1>
                <h2>Soluções para o</h2>
                <h2>crescimento digital</h2>
                <p>Desenvolvemos soluções para empresas que buscam crescimento digital, seja institucional ou
                  ecommerce</p>
                <button className='my-button'>Veja mais</button>
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div className='conectiza-banner'>
                <img className="img-fluid" src="/images/conectiza-banner.svg" alt="banner conectiza"></img>
              </div>
            </div>
          </div>
        </div>
        <div className='down-arrow'>
          <a href="#section-solucoes"><img src="/images/header-arrow.svg" alt=""></img></a>
        </div>
      </section>

      <div className="container-lg" id='section-solucoes'>
        <div className="row text-center">
          <div className="col">
            <h1 className='solucoes'><span className="dash">//</span> Soluções para comércio digital</h1>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          {solucaoCardInfo.map(createSolucaoCard)}
        </div>
        <div className="row">
          <div className="col">
            <div className='solicitar'>
              <div>
                <h1>Pronto para revolucionar seu E-commerce?</h1>
                <p></p>
              </div>
              <button>Solicitar Orçamento</button>
            </div>
          </div>
        </div>
      </div>

      <section className='vtex'>
        <div className="container-lg">
          <div className="row text-center justify-content-center">
            <div className="col-md-7">
              <img src="images/vtex-icon.svg" alt="ícone vtex"></img>
              <h1>Somos especializados em desenvolvimento e implementação em VTEX IO.</h1>
              <button>SUA LOJA PRONTA EM 7 DIAS</button>
            </div>
          </div>
        </div>
      </section>

      <div className="container-lg">
        <div className="row my-5 mx-3 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className='headless'>
              <h1><span className="dash">//</span> Headless</h1>
              <h1>Commerce</h1>
              <p>Para chegar à frente da curva de inovação e ultrapassar a concorrência, considere o headless
                commerce, facilitando a criação de experiências atraentes para seu cliente.</p>
            </div>
          </div>
          <div className="col-4 col-lg-4 my-4 text-center">
            <img className="img-fluid" src="images/carrinho.svg" alt="ícone carrinho"></img>
          </div>
        </div>
        <div className="row mx-0 mx-sm-2 mb-5 text-center">
          {headlessCardInfo.map(createHeadlessCard)}
        </div>

        <div className="row mx-2 mt-5">
          <div className="col">
            <div className='headless-info'>
              <p>Desenvolvemos seu projeto de acordo com as suas necessidades, as implementações de plataformas de
                e-commerce estão entre os investimentos mais discutidos em TI de varejo e, não surpreendentemente,
                há um grande crescimento nesta área.</p>
              <p>Planejamos e executamos tarefas nas melhores práticas de desenvolvimento, nossa responsabilidade como
                especialistas e criadores se expressa através do desenvolvimento de soluções digitais de alto nível.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5 text-center mx-2 align-items-center">
          {marcasInfo.map(createMarcas)}
        </div>
      </div>

      <section className='contato'>
        <div className="container-lg">
          <div className="row mx-2">
            <div className="col-xl-8">
              <div className='contato-title'>
                <h1><span className="dash">//</span> Contato</h1>
                <p>Nosso time comercial é especializado para atender suas demandas com agilidade.</p>
              </div>
            </div>
          </div>
          <div className="row mx-sm-2">
            <div className="col-xl-7">
              <div className='contato-input'>
                <input type="text" name="nome" id='nome' placeholder="Nome"></input>
                <div className='email-tel'>
                  <input type="email" name="email" id='email' placeholder="E-mail"></input>
                  <input type="tel" name="tel" id='tel' placeholder="Telefone"></input>
                </div>
                <textarea name="mensagem" id='mensagem' rows="7" placeholder="Mensagem"></textarea>
                <button>Enviar</button>
              </div>
            </div>
            <div className="col-xl-5 mt-5 px-xl-5 mt-xl-0">
              <div className='contato-info'>
                <div>
                  <img src="images/whatsapp-icon.svg" alt="ícone whatsapp"></img>
                  <h1>(48) 99999.9999</h1>
                </div>
                <div>
                  <img src="images/envelope-icon.svg" alt="ícone envelope"></img>
                  <h1>contato@conectiza.com.br</h1>
                </div>
                <div>
                  <img src="images/local-icon.svg" alt="ícone localização"></img>
                  <h1>Florianópolis / SC</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

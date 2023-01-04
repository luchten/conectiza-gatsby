import React, { useState, useEffect } from "react";
import MainMenu from '../components/MainMenu';
import '../styles/home.css';
import solucaoCardInfo from '../script/solucaoCard';
import headlessCardInfo from '../script/headlessCard';
import { createSolucaoCard, createHeadlessCard, createMarcas } from '../script/createFunctions';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import VtexSection from "../components/VtexSection";
import 'animate.css';
import Planos from '../components/Planos.jsx';

export default function Home() {
  const [mainMenuState, setMainMenuState] = useState('up');

  useEffect(() => {
    const scrollHandle = () => {
      if (window.scrollY > 0) {
        setMainMenuState('down');
      } else {
        setMainMenuState('up');
      }
    }
    window.addEventListener('scroll', scrollHandle);
  }, []);

  return (
    <div>
      <section className='header'>
        <div className={mainMenuState == 'up' ? 'main-menu-div' : 'main-menu-div main-menu-down'}>
          <MainMenu />
        </div>
        <div className="container-lg">
          <div className="row mx-2 mx-sm-0 justify-content-center align-items-center">
            <div className="col-lg-7 mt-5">
              <div className='conectiza-title'>
                <h1>Tenha sua loja pronta e vendendo em 15 dias</h1>
                <h2>Conheça nossa solução de loja rápida</h2>
                <p>Desenvolvemos soluções para empresas que buscam crescimento digital, seja institucional ou
                  ecommerce</p>
                <button className='my-button'>Veja mais</button>
              </div>
            </div>
            <div className="col-lg-5 mt-5">
              <div className='conectiza-banner'>
                <img className="img-fluid" src="images/loja-banner.svg" alt="banner loja"></img>
              </div>
            </div>
          </div>
        </div>
        <div className='down-arrow'>
          <a href="#section-solucoes"><img className='animate__animated animate__bounce animate__infinite animate__slow' src="images/header-arrow.svg" alt="seta baixo"></img></a>
        </div>
      </section>

      <div className="container-lg" id='section-solucoes'>
        <div className="row text-center">
          <div className="col">
            <h1 className='solucoes'><span className="dash">//</span> Soluções para comércio digital</h1>
          </div>
        </div>
        <div className="row justify-content-center text-center border-bottom pb-5">
          {solucaoCardInfo.map(createSolucaoCard)}
        </div>
        <div className="row mt-5 mx-2 mx-sm-0 align-items-center border-bottom pb-5">
          <div className="my-4 col-md-5 text-center text-lg-start">
            <img className="img-fluid" src="images/conectiza-banner1.png" alt="" />
          </div>
          <div className="mt-5 col-md-7">
            <div className="conectiza-subtitle text-center text-md-end">
              <h1>Construímos ideias digitais poderosas</h1>
              <h2>Soluções para o crescimento digital</h2>
              <p>Desenvolvemos soluções para empresas que buscam crescimento digital, seja institucional ou
                ecommerce</p>
              <button className='my-button'>Veja mais</button>
            </div>
          </div>
        </div>
        <div className="row mt-5 mx-2 mx-sm-0 align-items-center pb-5">
          <div className="mt-5 col-md-7">
            <div className="conectiza-subtitle1 text-center text-md-start">
              <h1>Loja pronta e vendendo em apenas 15 dias</h1>
              <h2>Nossa solução de loja rápida para quem precisa de agilidade</h2>
              <p>Planos diferentes para diferentes necessidades</p>
            </div>
          </div>
          <div className="my-4 col-md-5 text-center text-lg-end">
            <img className="img-fluid" src="images/clock1.svg" alt="" />
          </div>
        </div>
        <div className="row justify-content-center gy-4">
          <div className="col-11 col-sm-8 col-md-6 col-lg-4 px-md-3 px-xl-4">
            <Planos
              title='Express'
              text1='• Layouts pré-definidos'
              text2='• Desenvolvimento em apenas 15 dias'
              text3='• Domínio incluso'
              buttonType='2'>
            </Planos>
          </div>
          <div className="col-11 col-sm-8 col-md-6 col-lg-4 px-md-3 px-xl-4">
            <Planos
              title='Starter'
              text1='• Funcionalidades avançadas'
              text2='• Alterações de layout*'
              text3='• Desenvolvimento em 15 dias*'
              text4='• Domínio incluso'>
            </Planos>
          </div>
          <div className="col-11 col-sm-8 col-md-6 col-lg-4 px-md-3 px-xl-4">
            <Planos
              title='Custom'
              text1='• Layout exclusivo'
              text2='• Loja desenvolvida sob medida para seu negócio'
              text3='• Personalização total de conteúdo'
              text4='• Planejamento com equipes dedicadas exclusivamente ao seu projeto'>
            </Planos>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <div className='solicitar'>
              <div>
                <h1>Pronto para revolucionar seu E-commerce?</h1>
                <p>Somos uma equipe de arquitetura e engenharia de software focada na solução de problemas de negócios altamente complexos.</p>
              </div>              
            </div>
          </div>
        </div>
      </div>

      <VtexSection />

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

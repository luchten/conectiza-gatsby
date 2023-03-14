import React, { useState, useEffect } from "react";
import MainMenu from '../components/MainMenu';
import '../styles/home.css';
import solucaoCardInfo from '../script/solucaoCard';
import headlessCardInfo from '../script/headlessCard';
import { createSolucaoCard, createHeadlessCard } from '../script/createFunctions';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import VtexSection from "../components/VtexSection";
import Marcas from "../components/Marcas";

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
        <div className={mainMenuState === 'up' ? 'main-menu-div' : 'main-menu-div main-menu-down'}>
          <MainMenu />
        </div>
        <div className="container-lg">
          <div className="row mx-2 mx-sm-0">
            <div className="col-lg-7 mt-5">
              <div className='conectiza-title'>
                <h1>Construímos ideias digitais em alto nível</h1>
                <h2>Estruturamos e fazemos o seu projeto</h2>
                <p>Pensamos e desenvolvemos soluções para empresas que buscam crescimento digital, seja institucional ou ecommerce</p>
                <button className='my-button'>Veja mais</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-lg pb-5" id='section-solucoes'>
        <div className="row text-center">
          <div className="col">
            <h1 className='solucoes'>O QUE PODEMOS</h1>
            <h1 className='solucoes bold'>FAZER PELO SEU NEGÓCIO</h1>
          </div>
        </div>
        <div className="row mt-5 justify-content-center text-center pb-5">
          {solucaoCardInfo.map(createSolucaoCard)}
        </div>
        <div className="row my-5">
          <div className="col">
            <div className='solicitar'>
              <div>
                <h1>Pronto para revolucionar seu E-commerce?</h1>
                <p>Somos uma equipe de arquitetura e engenharia de software focada na solução de problemas de negócios altamente complexos.</p>
              </div>
              <button>Revolucionar</button>
            </div>
          </div>
        </div>
      </div>

      <VtexSection />

      <div className="container-lg pb-5">
        <Marcas></Marcas>
        <div className="row my-5 mx-3 align-items-center justify-content-center">
          <div className="col">
            <div className='headless text-center'>
              <h1>Soluções para seu e-commerce</h1>
              <p>Para chegar à frente e ultrapassar a concorrência, veja o que podemos fazer pelo seu negócio, facilitando a criação de experiências atraentes para seus clientes.</p>
            </div>
          </div>
        </div>
        <div className="row mx-0 mx-sm-2 mb-5 text-center">
          {headlessCardInfo.map(createHeadlessCard)}
          <div className="text-start my-5">
            <p className="default-p">Desenvolvemos seu projeto de acordo com as suas necessidades, as implementações de plataformas de e-commerce estão entre os investimentos mais discutidos em TI de varejo e, não surpreendentemente, há um grande crescimento nesta área.</p>
            <p className="default-p">Planejamos e executamos tarefas nas melhores práticas de desenvolvimento, nossa responsabilidade como especialistas e criadores se expressa através do desenvolvimento de soluções digitais de alto nível.</p>
          </div>
          <div className="partners">
            <img src="/conectiza-gatsby/images/nuvemshop-partner.png" alt="ícone parceiro" />
            <img src="/conectiza-gatsby/images/nuvemshop-partner.png" alt="ícone parceiro" />
          </div>
        </div>
      </div>

      <div className="contato-banner text-center">
        <div className="col-10 col-xxl-6">
          <h1>Construímos suas ideias digitais em alto nível</h1>
        </div>
      </div>
      <div className="container-lg my-5 py-5">
        <div className="row mx-2">
          <div className="col-xl-10">
            <div className='contato-title'>
              <h1>Contato</h1>
              <p>Somos uma empresa <span className="bold">catarinense 100% remota</span> e digital, nosso time é formado por especialistas, prontos para atender e entregar com agilidade</p>
            </div>
          </div>
        </div>
        <div className="row mx-sm-2">
          <div className="col-xl-7">
            <div className='contato-input'>
              <input type="text" name="nome" id='nome' placeholder="Nome *"></input>
              <input type="text" name="empresa" id='empresa' placeholder="Empresa"></input>
              <div className='email-tel'>
                <input type="email" name="email" id='email' placeholder="E-mail *"></input>
                <input type="tel" name="tel" id='tel' placeholder="Celular *"></input>
              </div>
              <div className="privacidade">
                <input type="checkbox" name="privacidade" id="privacidade" />
                <div>
                  <p>Ao preencher o formulário e clicar no checkbox, você expressamente declara que está ciente de que a nossa empresa poderá realizar contato com você via e-mail, telefone e WhatsApp.</p>
                  <p>Para mais informações, confira a nossa <span className="bold">Política de Privacidade.</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 mt-4 mt-xl-0 px-xl-3 mt-xl-0 text-center">
            <textarea className="ajudar" name="mensagem" id='mensagem' rows="9" placeholder="Como podemos ajudar? *"></textarea>
            <button className="especialista">Falar com um especialista</button>
          </div>
        </div>
      </div>
      <section className="contato-solucoes">
        <h1>Soluções para seu e-commerce</h1>
        <h1 className="bold">Agência de Implantação de e-commerce VTEX</h1>
        <h1 className="bold">Suporte Técnico VTEX</h1>
        <h1 className="bold">Gestão de Tráfego Orgânico | SEO</h1>
        <h1 className="bold">Gestão de Tráfego | Mídias Pagas</h1>
      </section>
      <Footer />
    </div>
  );
}

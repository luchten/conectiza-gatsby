import React from 'react';
import Layout from '../components/Layout';
import '../styles/solucoes.css';

export default function Solucoes() {
    return (
        <Layout>
            <div className="container-lg my-5">
                <div className="row mx-2 mx-sm-0">
                    <div className="col">
                        <div className='solucoes-title'>
                            <h1>O que podemos</h1>
                            <h1 className='bold'>fazer pelo seu negócio</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="row mx-2 mx-sm-0 my-5 pt-5">
                    <div className="col">
                        <div className="solucoes-card">
                            <img src="/conectiza-gatsby/images/implantacao-icon.svg" alt="" />
                            <div>
                                <h1>Implantação de e-commerce com as melhores tecnologias do mercado</h1>
                                <p>Uma operação de e-commerce é um ativo estratégico para sua empresa, certamente um dos passos mais importantes para o futuro dos seus
                                    negócios. Escolher a melhor agência de implantação de e-commerce, é ter a tranquilidade e a certeza de saber que seu projeto está em boas
                                    mãos, sendo conduzido pelos melhores profissionais do mercado e uma metodologia (processos e ferramentas) exclusiva, que vem sendo
                                    testada e melhorada ao longo de 15 anos. Contar com toda a expertise da melhor implantadora VTEX do mercado, que já realizou implantação
                                    de e-commerce em mais de 350 lojas, faz toda a diferença.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mx-2 mx-sm-0">
                    <div className="col">
                        <div className="solucoes-card">
                            <img src="/conectiza-gatsby/images/suporte-icon.svg" alt="" />
                            <div>
                                <h1>Suporte & evolução com a expertise de um time focado em melhorias e soluções de problemas</h1>
                                <p>Os melhores desenvolvedores, criativos, analistas de UX (experiência do usuário), especialistas em SEO, em otimização de conversão e técnicos
                                    VTEX a serviço do seu e-commerce, trabalhando pelo seu negócio. Nós acompanhamos o dia a dia da sua loja, sempre propondo novas soluções
                                    e estratégias para que o resultado seja alcançado.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-2 mx-sm-0 my-5">
                    <div className="col">
                        <div className="solucoes-card">
                            <img src="/conectiza-gatsby/images/consultoria-icon.svg" alt="" />
                            <div>
                                <h1>Extraia o máximo de suas operações, tire os melhores resultados da sua plataforma</h1>
                                <p>Além dos resultados da sua gestão de mídias, que tal acelerar seus resultados de vendas com uma consultoria para configurações avançadas
                                    na loja: suporte para desenvolvimento de novos componentes e ferramentas. A agência Avanti ajuda seu time a encurtar a curva de aprendizado
                                    e dominar por completo todos os recursos do seu e-commerce.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

import React from 'react'
import Layout from '../components/Layout'
import PageCall from '../components/PageCall'
import '../styles/carreira.css'

export default function Carreira() {
    return (
        <Layout>
            <div className="container-lg my-5">
                <div className="row mx-2 mx-sm-0">
                    <div className="col">
                        <div className='carreira-title'>
                            <h1>O que podemos</h1>
                            <h1 className='bold'>fazer pelo seu negócio</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <div className="carreira-row">
                            <p>Estagiário de desenvolvimento Front-end (React) - VTEX</p>
                        </div>
                        <div className="carreira-row">
                            <p>Estagiário de desenvolvimento Front-end (React) -  NuvemShop</p>
                        </div>
                        <div className="carreira-row">
                            <p>Desenvolvedor Front-end Sênior (React, Typescript) - VTEX IO</p>
                        </div>
                        <div className="carreira-row">
                            <p>Estagiário de desenvolvimento Front-end (React) - VTEX</p>
                        </div>
                        <div className="carreira-row">
                            <p>Estagiário de desenvolvimento Front-end (React) -  NuvemShop</p>
                        </div>
                        <div className="carreira-row">
                            <p>Desenvolvedor Front-end Sênior (React, Typescript) - VTEX IO</p>
                        </div>
                        <div className="carreira-row">
                            <p>Estagiário de desenvolvimento Front-end (React) - VTEX</p>
                        </div>
                        <div className="carreira-row">
                            <p>Estagiário de desenvolvimento Front-end (React) -  NuvemShop</p>
                        </div>
                        <div className="carreira-row">
                            <p>Desenvolvedor Front-end Sênior (React, Typescript) - VTEX IO</p>
                        </div>
                    </div>
                </div>
                <PageCall
                    title='Não encontrou uma vaga?'
                    text1='Entre em contato com nosso setor de recrutamento através do botão abaixo e cadastre seu currículo.'
                    button='ENVIAR CURRÍCULO'
                />
            </div>
        </Layout>
    )
}

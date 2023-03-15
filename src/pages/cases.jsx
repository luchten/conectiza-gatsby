import React from 'react'
import Layout from '../components/Layout'
import '../styles/cases.css'
import Marcas from '../components/Marcas';
import PageCall from '../components/PageCall'

export default function Cases() {
  return (
    <Layout>
        <div className="container-lg my-5">
            <div className="row pb-5">
                <div className="col cases-title">
                    <h1>Algumas <span className='bold'>marcas</span> que</h1>
                    <h1>confiam em nossa <span className="bold">Expertise</span></h1>
                </div>
            </div>
            <div className="row my-5 gx-5">
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
            </div>
            <div className="row my-5 gx-5">
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
            </div>
            <div className="row my-5 gx-5">
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="cases-marcas">
                        
                    </div>
                </div>
            </div>
            <Marcas></Marcas>
            <PageCall 
                    title="Soluções sob medida para seu e-commerce"
                    text1="Veja como o nosso time pode contribuir para acelerar seus resultados no comércio digital e ajudar a chegar no próximo nível."                    
                    button="FALE COM NOSSOS CONSULTORES"
            />
        </div>
    </Layout>
  )
}

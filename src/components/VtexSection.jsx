import React, { useState } from "react";

export default function VtexSection() {
    const [buttonState, setButtonState] = useState('');
    const mouseOver = () => {
        setButtonState('vtex-big');
        setTimeout(() => {
            setButtonState('vtex-small');
        }, 125);
        setTimeout(() => {
            setButtonState('');
        }, 250);
    }

    return (
        <section className='vtex'>
            <div className="container-lg">
                <div className="row text-center justify-content-center">
                    <div className="col">
                        <img src="images/vtex-icon.svg" alt="ícone vtex"></img>
                        <img src="images/shopify-white.svg" alt="ícone shopify" />
                        <img src="images/nuvemshop-white.svg" alt="ícone nuvemshop" />
                        <h1>Somos especializados em desenvolvimento e implementação de e-commerce multiplataforma.</h1>
                        <button className={buttonState} onMouseOver={mouseOver}>SUA LOJA PRONTA EM 15 DIAS*</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

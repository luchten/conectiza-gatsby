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
                    <div className="col-md-7">
                        <img src="images/vtex-icon.svg" alt="ícone vtex"></img>
                        <h1>Somos especializados em desenvolvimento e implementação em VTEX IO.</h1>
                        <button className={buttonState} onMouseOver={mouseOver}>SUA LOJA PRONTA EM 7 DIAS</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

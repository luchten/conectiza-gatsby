import React, { useState } from "react";
import 'animate.css';

export default function Marcas() {
    const [mouseOverState, changeMouseOverState] = useState();
    const changeMouseState = (count) => {
        changeMouseOverState(count);
    }    
    return (
    <div className="row my-5 py-5 marcas text-center">
        <div className="col">
            <div className="row">
                <div className="col">
                    <img className={mouseOverState === '1' ? 'animate__animated animate__headShake' : ''} onMouseOver={() => changeMouseState('1')} onMouseLeave={() => changeMouseState('leave')} src="/conectiza-gatsby/images/abinbev.svg" alt="ícone abinbev" />
                    <img className={mouseOverState === '2' ? 'animate__animated animate__headShake' : ''} onMouseOver={() => changeMouseState('2')} onMouseLeave={() => changeMouseState('leave')} src="/conectiza-gatsby/images/hering.svg" alt="ícone hering" />
                    <img className={mouseOverState === '3' ? 'animate__animated animate__headShake' : ''} onMouseOver={() => changeMouseState('3')} onMouseLeave={() => changeMouseState('leave')} src="/conectiza-gatsby/images/localiza.svg" alt="ícone localiza" />
                    <img className={mouseOverState === '4' ? 'animate__animated animate__headShake' : ''} onMouseOver={() => changeMouseState('4')} onMouseLeave={() => changeMouseState('leave')} src="/conectiza-gatsby/images/reserva.svg" alt="ícone reserva" />
                    <img className={mouseOverState === '5' ? 'animate__animated animate__headShake' : ''} onMouseOver={() => changeMouseState('5')} onMouseLeave={() => changeMouseState('leave')} src="/conectiza-gatsby/images/c&a.svg" alt="ícone c&a" />
                    <img className={mouseOverState === '6' ? 'animate__animated animate__headShake' : ''} onMouseOver={() => changeMouseState('6')} onMouseLeave={() => changeMouseState('leave')} src="/conectiza-gatsby/images/carrefour.svg" alt="ícone carrefour" />
                    <img className={mouseOverState === '7' ? 'animate__animated animate__headShake' : ''} onMouseOver={() => changeMouseState('7')} onMouseLeave={() => changeMouseState('leave')} src="/conectiza-gatsby/images/labellamafia.svg" alt="ícone labelamaffia" />
                    <img className={mouseOverState === '8' ? 'animate__animated animate__headShake' : ''} onMouseOver={() => changeMouseState('8')} onMouseLeave={() => changeMouseState('leave')} src="/conectiza-gatsby/images/jhsf.svg" alt="ícone jhsf" />
                </div>
            </div>            
        </div>

    </div>
  );
}

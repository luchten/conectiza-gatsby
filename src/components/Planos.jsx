import React from "react";
import '../styles/planos.css';
import { useState } from "react";

export default function Planos(props) {
    const [mouseOverState, changeMouseOverState] = useState('false');
    const changeMouseState = (args) => {
        if (args === 'over') changeMouseOverState('true')
        else changeMouseOverState('false');
    }
    return (
        <div className="planos">
            <h1>{props.title}</h1>
            <div>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
            </div>
            <button className={(props.buttonType === '2' && mouseOverState === 'true') ? 'button2 animate__animated animate__rubberBand' :
                (props.buttonType === '2' && mouseOverState === 'false') ? 'button2' : 'button1'} onMouseOver={() => changeMouseState('over')} onMouseLeave={() => changeMouseState('leave')}>Solicitar Orçamento
            </button>
        </div>
    );
}
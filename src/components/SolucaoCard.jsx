import React from 'react';

function SolucaoCard(props) {
    return (
        <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
            <div className='solucao-card'>
                <img src={props.src} alt={props.alt}></img>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default SolucaoCard;
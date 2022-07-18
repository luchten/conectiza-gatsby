import React from 'react';

function Marcas(props) {
    return (
        <div className="col-lg-4 mb-5 mb-lg-5">
            <img className='marcas' src={props.src} alt={props.alt}></img>
        </div>
    );
}

export default Marcas;
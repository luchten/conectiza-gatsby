import React from 'react';

function HeadlessCard(props) {
    return (
        <div className={props.classes}>
            <div className='headless-card'>
                <img src={props.src} alt={props.alt}></img>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default HeadlessCard;
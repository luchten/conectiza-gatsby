import React from 'react'
import '../styles/pageCall.css';


export default function PageCall(props) {
    return (
        <div className="row mx-2 mx-sm-0 my-5 py-5">
            <div className="col">
                <div className="gostou text-center">
                    <h1>{props.title}</h1>
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <button>{props.button}</button>
                </div>
            </div>
        </div>
    )
}

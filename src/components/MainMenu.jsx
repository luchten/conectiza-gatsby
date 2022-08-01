import React, { useState } from "react";
import { Link } from "gatsby";
import '../styles/mainMenu.css';

export default function MainMenu() {
    const [menuState, setMenuState] = useState('up');

    const menuDown = () => {
        setMenuState('down');
    }

    const menuUp = () => {
        setMenuState('up');
    }
    return (
        <div className="container-lg">
            <div className="row mx-2 mx-sm-0">
                <div className="col">
                    <div className='main-menu'>
                        <Link to='/'><img src='/conectiza-logo.svg' alt="logotipo conectiza"></img></Link>
                        <ul className={menuState == 'down' ? 'menu-links menu-links-show' : 'menu-links'}>
                            <li><Link to="/sobre">agência</Link></li>
                            <li><Link to="#">soluções</Link></li>
                            <li><Link to="#">cases</Link></li>
                            <li><Link to="#">carreira</Link></li>
                            <li><Link to="#">contato</Link></li>
                        </ul>
                        <div className='toggle-button' onClick={menuState == 'up' ? menuDown : menuUp}>
                            <div id="bar-1" className='bar1'></div>
                            <div id="bar-2" className='bar2'></div>
                            <div id="bar-3" className='bar1'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

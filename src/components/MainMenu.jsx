import React, { useState } from "react";
import { Link } from "gatsby";
import '../styles/mainMenu.css';

export default function MainMenu() {
    var isToggled = false;
    const [menuState, setMenuState] = useState('');    

    const menuShow = () => {
        setMenuState('show');
        isToggled = true;
    }

    const menuHide = () => {
        setMenuState('');
        isToggled = false;
    }

    document.addEventListener('click', () => {
        console.log(isToggled);
    });

    return (
        <div className="container-lg">
            <div className="row mx-2 mx-sm-0">
                <div className="col">
                    <div className='main-menu'>
                        <Link to='/'><img src='/images/conectiza-logo.svg' alt="logotipo conectiza"></img></Link>
                        <ul className={menuState == 'show' ? 'menu-links menu-links-show' : 'menu-links'}>
                            <li><Link to="/sobre">agência</Link></li>
                            <li><Link to="#">soluções</Link></li>
                            <li><Link to="#">cases</Link></li>
                            <li><Link to="#">carreira</Link></li>
                            <li><Link to="#">contato</Link></li>
                        </ul>
                        <div className='toggle-button' onClick={menuState == '' ? menuShow : menuHide}>
                            <div className={menuState == 'show' ? 'bar1 bar1-animate' : 'bar1'}></div>
                            <div className={menuState == 'show' ? 'bar2 bar2-animate' : 'bar2'}></div>
                            <div className={menuState == 'show' ? 'bar1 bar3-animate' : 'bar1'}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

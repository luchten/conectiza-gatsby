import MainMenu from './MainMenu';
import Footer from './Footer';
import React from "react";
import '../styles/global.css';

export default function Layout({children}) {
    return (
        <div>
            <div className='main-menu-section'>
                <MainMenu />
            </div>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}
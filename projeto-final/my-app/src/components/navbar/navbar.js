import React from 'react'
import logo from './logo-desktop.png'
import Container from '../container/index'
 import Menu from './menu'
import './navbar.css'

const Navbar = (props) => {
    return (
        <Container>
        <nav className='navbar'>
            <img
                className='navbar__logo'
                src={logo}
                alt='logo esclarecendo a esclerose múltipla tem um sol e a frase nome do site em laranja'
            />
            <Menu/>
        </nav>
        </Container>
    );
};

export default Navbar
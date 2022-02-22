import React from 'react'
import './menu.css'

const Menu = (props) => {
    return (
        <ul className='navbar__menu-list'>
            <a href="#header"><li>O que é?</li></a>
            <a href="#sintomas"><li>Sintomas</li></a>
            <a href="#casos-reais"><li>Casos Reais</li></a>
            <a href="#curiosidades"><li>Curiosidades</li></a>
            <a href="#contato"><li>Contato</li></a>
        </ul>
    )
}




export default Menu
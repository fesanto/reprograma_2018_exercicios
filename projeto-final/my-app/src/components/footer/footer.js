import React from 'react'
import Container from '../container/index'
import redesFb from './fb-32.png'
import redesInst from './inst-32.png'
import redesEmail from './email-32.png'
import redesWhats from './whats-32.png'
import './footer.css'

const Footer = ( ) => {
    return (
        
        <footer className='footer'>
            <Container>
            <div className='footer__div'>
            <p>Esclarecendo a Esclerose Múltipla</p>
            <div className='footer__redes'>
                <a href="#">
                    <img
                        className='footer__redes-fb'
                        src={redesFb}
                        alt='logo Facebook redondo preto'
                    />
                </a>
                <a href="#">
                    <img
                        className='footer__redes-inst'
                        src={redesInst}
                        alt='logo Instagram redondo preto'
                    />
                </a>
                <a href="#">
                    <img
                        className='footer__redes-email'
                        src={redesEmail}
                        alt='imagem do arroba preto'
                    />
                </a>
                <a href="#">
                    <img
                        className='footer__redes-whats'
                        src={redesWhats}
                        alt='logo WhatsApp redondo preto'
                    />                
                </a>
            </div>
            </div>
            </Container>
        </footer>
        
    );
};

export default Footer
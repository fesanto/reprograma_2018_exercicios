//npm install react-responsive-carousel --save

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import curiosidade1 from './c1.png'
import curiosidade2 from './c2.png'
import curiosidade3 from './c3.png'
import curiosidade4 from './c4.png'
import curiosidade5 from './c5.png'
import curiosidade6 from './c6.png'

class Carrossel extends React.Component {
    render() {
        return (
            <Carousel showThumbs={false}> 
                <div>
                    <img src={curiosidade1} alt='card com curiosidades com fundo laranja e letras pretas'/>
                </div>
                <div>
                    <img src={curiosidade2} alt='card com curiosidades com fundo laranja e letras pretas'/>
                </div>
                <div>
                    <img src={curiosidade3} alt='card com curiosidades com fundo laranja e letras pretas'/>
                </div>
                <div>
                    <img src={curiosidade4} alt='card com curiosidades com fundo laranja e letras pretas'/>
                </div>
                <div>
                    <img src={curiosidade5} alt='card com curiosidades com fundo laranja e letras pretas'/>
                </div>
                <div>
                    <img src={curiosidade6} alt='card com curiosidades com fundo laranja e letras pretas'/>
                </div>
            </Carousel>
        );
    }
};

export default Carrossel
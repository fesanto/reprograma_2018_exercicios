import React from 'react'
import bruna from './woman-1.png'
import karina from './woman-2.png'
import helena from './woman-3.png'
import marcos from './man-1.png'
import abem from './abem.png'
import ame from './ame.png'
import Carrossel from '../carousel'
import Container from '../container'
import Label from '../label'
import Input from '../input'
import './main.css'


const Main = (props) => {
    return (
        <React.Fragment>
            <header id='header' className='header'>
                <Container>
                    <h1>O que é Esclerose Múltipla?</h1>
                    <p>É uma doença inflamatória do sistema nervoso central (cérebro, medula espinhal e nervos ópticos) cujo
                        alvo é
                        o revestimento do nervo responsável pela condução dos impulsos elétricos do sistema nervoso central
                        para
                o corpo e vice-versa.</p>
                    <p>Não há tratamento preventivo e não há cura, por isso o diagnóstico precoce é fundamental.</p>
                    <p>A forma mais comum de esclerose múltipla é a remitente recorrente que evolui em surtos e os sintomas ocorrem subitamente com recuperação total ou parcial. A esclerose primariamente progressiva é a mais rara e mais maligna, apresentando uma progressão dos sintomas e deixa sequelas desde o início. E a terceira forma da doença é a secundariamente progressiva, uma evolução da remitente recorrente, em que o portador piora de forma lenta e progressiva.</p>
                </Container>
            </header>

            <Container>
                <section id='sintomas' className='sintomas'>
                    <h2>Sintomas</h2>
                    <p>Os sintomas da Esclerose Múltipla são diversos e não se apresentam na mesma maneira nas pessoas, pois dependem dos nervos afetados. Devem ocorrer por mais de 24 horas consecutivas sem que o paciente apresente alguma infecção.</p>
                </section>

                <section id='casos-reais' className='casos-reais'>
                    <h2>Casos Reais</h2>
                    <div className='casos-reais__div-a'>
                        <div className='casos-reais__div-1'>
                            <img src={bruna} alt='desenho de um busto e rosto feminino num fundo vermelho com cabelos catanhos até o ombro, pele clara, vestindo uma camiseta preta e um casaco vermelho'/>
                            <h3>Bruna</h3>
                            <ul>
                                <li>1º sintoma: paralisia muscular.</li>
                                <li>Passou a cair com frequência. </li>
                                <li>Diagnósticos eram de stress.</li>
                                <li>Piora dos sintomas: visão nublada, perda do movimento das pernas enquanto dirigia, fraqueza muscular constante.</li>
                                <li>Após muitos exames, o diagnóstico de Esclerose Múltipla.</li>
                            </ul>
                        </div>
                        <div className="casos-reais__div-2">
                            <img src={karina} alt='desenho de um busto e rosto feminino num fundo azul com cabelos catanhos até a base do pescoço, pele clara, vestindo uma camisa azul de gola branca'/>
                            <h3>Karina</h3>
                            <ul>
                                <li>1º sintoma:  fraqueza e dor generalizada.</li>
                                <li>Dores nas costas e dificuldade para realizar movimentos simples como tomar banho. </li>
                                <li>Vários diagnósticos equivocados antes do diagnóstico final.</li>
                                <li>Mudança de atividade profissional em razão da limitação que a doença trouxe.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='casos-reais__div-b'>
                        <div className='casos-reais__div-3'>
                            <img src={helena} alt='desenho de um busto e rosto feminino num fundo azul com cabelos vermelhos até a base do pescoço, pele clara, vestindo uma camisa azul de gola branca'/>
                            <h3>Helena</h3>
                            <ul>
                                <li>1º sintoma: formigamento na mão direita e dificuldades para permanecer em pé.</li>
                                <li>Diagnóstico conclusivo após ficar com os membros superiores e inferiores paralizados.</li>
                                <li>A rotina diária foi completamente alterada para adaptação à nova realidade que incluía visitas mensais ao médico, fisioterapia e medicamentos.</li>
                            </ul>
                        </div>
                        <div className='casos-reais__div-4'>
                            <img src={marcos} alt='desenho de um busto e rosto masculino num fundo laranja com cabelos pretos curtos, barba preta, pele clara, vestindo uma blusa verelha de gola branca'/>
                            <h3>Marcos</h3>
                            <ul>
                                <li>1º sintoma: sensação de cisco no olho e formigamento nos braços.</li>
                                <li>Após vários diagnósticos inconclusivos e tratamentos ineficazes, com um lado inteiro do corpo paralisado recebeu o diagnóstico de esclerose múltipla.</li>
                                <li>A evolução foi muita rápida: perda da visão periférica, cãimbras severas e tremores. </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id='curiosidades' className='curiosidades'>
                    <h2>Curiosidades</h2>
                    <div className='curiosidades__carrossel'>
                        <Carrossel />
                    </div>
                </section>

                <section id='contato' className='contato'>
                    <h2>Contato</h2>
                    <div className='contato__div'>
                        <div className='contato__form'>
                            <Label htmlFor='name'>Nome</Label>
                            <Input id='name' type='text' placeholder='Digite seu nome' />
                            <Label htmlFor='email'>E-mail</Label>
                            <Input id='email' type='email' placeholder='Digite seu e-mail' />
                            <Label id='mensagem'>Mensagem</Label>
                            <textarea placeholder='Deixe-nos uma mensagem' cols="25" rows="5" maxLength='200'></textarea>
                            <button submit='' className='button'>Enviar</button>
                        </div>
                        <div className='contato__links'>
                            <p>Parceiros</p>
                            <a href="http://abem.org.br/" target='_blank'>
                                <img src={abem} alt='logo da Associação Brasileira de Esclerose Múltipla com uma flor e letras em verde' />
                            </a>
                            <a href="https://amigosmultiplos.org.br/" target='_blank'>
                                <img src={ame} alt='logo da Amigos Múltiplos pela Esclerose com o desenho da palma de uma mão esqueda com os dedos em verde claro, um coração e letras em laranja na palma'/>
                            </a>
                        </div>
                    </div>
                </section>
            </Container>
        </React.Fragment >
    );
};

export default Main
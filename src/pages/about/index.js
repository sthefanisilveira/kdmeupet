import React, {useState, useEffect} from 'react';
import './styled.css';
// import {useHistory} from 'react-router-dom';
import div1 from '../../assets/diiv1.png';
import logo from '../../assets/logo.jpeg';
import pesquise from '../../assets/pesquise.png';
import compartilhe from '../../assets/compartilhe.png';
import encontre from '../../assets/encontre.png';
import celular from '../../assets/celular.png';
import applestore from '../../assets/applestore.png';
import playstore from '../../assets/playstore.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import facebook from '../../assets/facebook.png';


export default function about (){

    return (
        <>
            <div className="container">
                <header>
                    <a href="index.html"><img src={logo} alt="Kd Meu Pet" id="logo"></img></a>
                    
                    <ul className="navbar"> 
				        <li className="navbar-item"><a href="">Achei um Pet</a></li>
				        <li className="navbar-item"><a href="">Perdi meu Pet</a></li>
				        <li className="navbar-item"><a href="">App</a></li>
				        <li className="navbar-item"><a href="">Entrar</a></li>
			        </ul>
                </header>

                <main>
                    <div className="sobre1">
                        <div className="texto1">
                            <h1>Faça parte da nossa <br></br> comunidade</h1> <br></br>
                            <a class="button1">Entrar</a>
                        </div>
                        <div className="imagem1">
                            <img src={div1} id="img1"></img>
                        </div>
                    </div>

                    <div className="sobre2">
                        <h1>PERDEU SEU PET?</h1>
					    <h2>Nada de espalhar cartaz pela cidade!<br></br>Nossa comunidade te ajudará nessa busca.</h2><br></br>
                    </div>

                    <div className="sobre3">
                        <div className="pesquise">
                            <img src={pesquise} id="img1"></img>
                            <h2>Pesquise</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec era.</p>
                        </div>
                        <div className="compartilhe">
                            <img src={compartilhe} id="img1"></img>
                            <h2>Compartilhe</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec era.</p>
                        </div>
                        <div className="encontre">
                            <img src={encontre} id="img1"></img>
                            <h2>Encontre</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec era.</p>
                        </div>
                    </div>

                    <div className="sobre4">
                        <div className="app1">
                            <img src={celular} id="celular"></img>
                        </div>
                        <div className="app2">
                            <h1>Pet Search no seu celular!</h1>
                                <div className="baixarapp">
                                    <img src={applestore} class="img-app"></img>
                                    <img src={playstore} class="img-app"></img>
                                </div>
                            <h2>+ de 000 Pets já foram encontrados!</h2>
                        </div>
                    </div>
                </main>

                <footer>
                    <ul class="redes-footer">
					    <li class="rede" id="instagram"><img class="icone" src={instagram}></img></li>
					    <li class="rede" id="youtube"><img class="icone" src={youtube}></img></li>
					    <li class="rede" id="facebook"><img class="icone" src={facebook}></img></li>
				    </ul>
                </footer>

            </div>
        </>
    )
}
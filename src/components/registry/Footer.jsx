import React from 'react'
import global from '../../assets/img/global.png'
import '../../scss/registry/_Footer.scss'

const Footer = () => {
    return (
        <>
            <footer>
                    <p>¿Preguntas? Llama al <a href="#">01 800 917 1564</a></p>

                    <div className="flex">
                        <a>Preguntas frecuentes</a>
                        <a>Centro de ayuda</a>
                        <a>Tienda de Netflix</a>
                        <a>Términos de uso</a>
                    </div>

                    <div className="flex">
                        <a>Privacidad</a>
                        <a>Preferencias de cookies</a>
                        <a>Información corporativa</a>
                    </div>

                    <select data-uia="language-picker" name="__langSelect" tabindex="0"> <img src={global} alt="global" /> <option selected="" label="Español" lang="es" value="/signup/registration?locale=es-CO">Español</option><option label="English" lang="en" value="/signup/registration?locale=en-CO">English</option></select>
                </footer>
        </>
    )
}

export default Footer
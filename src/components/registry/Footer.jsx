// import global from '../../assets/img/global.png'
import '../../scss/registry/_Footer.scss'

const Footer = () => {
    return (
        <>
            <footer>
                    <p className='preguntas'>¿Preguntas? Llama al <a className='more' href="#">01 800 917 1564</a></p>

                    <div className="flex">
                        <a className='more'>Preguntas frecuentes</a>
                        <a className='more'>Centro de ayuda</a>
                        <a className='more'>Tienda de Netflix</a>
                        <a className='more'>Términos de uso</a>
                    </div>

                    <div className="flex">
                        <a className='more'>Privacidad</a>
                        <a className='more'>Preferencias de cookies</a>
                        <a className='more'>Información corporativa</a>
                    </div>

                    <select>
                        <option selected="Ingles" label="Español" lang="es" value="/signup/registration?locale=es-CO">
                            Español
                        </option>

                        <option label="English" lang="en" value="/signup/registration?locale=en-CO">
                            English
                        </option>
                    </select>
                    
                </footer>
        </>
    )
}

export default Footer
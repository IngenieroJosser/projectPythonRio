import dispositivos from '../../assets/img/dispositivos.png'
// import global from '../../assets/img/global.png'
import Footer from './Footer'
import { useNavigate } from "react-router-dom"

import '../../scss/registry/_Content.scss'

const Content = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Signup')
    }

    return (
        <>
            <div className="content">
                <img src={dispositivos} alt="dispositivos" />
                <span>PASO <strong>1</strong> DE <strong>3</strong></span>

                <h1>Completa la configuración de tu cuenta</h1>
                <p className='textNetflix'>Netflix está personalizado para ti. Crea una contraseña para comenzar a ver Netflix.</p>

                <a href="#" onClick={handleClick}>Siguiente</a>
            </div>

            <Footer />
        </>
    )
}

export default Content
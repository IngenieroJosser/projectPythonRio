import '../../scss/registry/_Signup.scss';
import ok from '../../assets/img/icon_Ok.png'
import chulo from '../../assets/img/chulo.png'
// import global 
import { useNavigate } from "react-router-dom"
import HeaderLog from './HeaderLog'
import Footer from './Footer'

const Signup = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/PaymentPicker')
    }

    return (
        <>
        <HeaderLog textButton="Iniciar Sesión" />

        <div className="banner-Sigup">
            <img src={ok} alt="icon_Ok" />
            <span>PASO <strong>2</strong> DE <strong>3</strong></span>

            <h1>Selecciona tu plan</h1>

        </div>
        
        <div className="banner-content">
            <div className="text">
                <img src={chulo} alt="chulo" />
                <p>Sin compromisos, cancela cuando quieras.</p>
            </div>

            <div className="text">
                <img src={chulo} alt="chulo" />
                <p>Todo Netflix a un bajo costo.</p>
            </div>

            <div className="text">
                <img src={chulo} alt="chulo" />
                <p>Disfruta sin límites en todos tus dispositivos.</p>
            </div>

            <a className='next' onClick={handleClick} href="#">Siguiente</a>
        </div>

        <Footer />
        </>
        
    )
}

export default Signup
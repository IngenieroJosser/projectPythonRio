import redirection from "../hooks/redirection"
import { useNavigate } from "react-router-dom"

const MainBanner = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/content')
  }

  return (
    <>
        <div className="banner-container">
            <div className="banner-content">
                <h1>Películas y series ilimitadas y mucho más</h1>
                <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
                <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
                <div className="banner-inputs-container">
                    <input type="email" name="" id="" placeholder='Email' />
                    <button className='Primary-button extralarge' onClick={handleClick}>Comenzar</button>
                </div>
            </div>
            <span className="back-black"></span>
        </div>
    </>
  )
}

export default MainBanner
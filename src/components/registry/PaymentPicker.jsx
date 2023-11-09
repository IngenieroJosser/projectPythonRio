import '../../scss/registry/_PaymentPicker.scss'
import { useNavigate } from "react-router-dom"
import candado from '../../assets/img/candado.png'
import visa from '../../assets/img/VISA.png'
import mastercard from '../../assets/img/MASTERCARD.png'
import amex from '../../assets/img/AMEX.png'
import diners from '../../assets/img/DINERS.png'
import flecha from '../../assets/img/flecha.png'
import efecty from '../../assets/img/EFECTY.png'
import gift from '../../assets/img/GIFT_CODE.png'
import Footer from './Footer'
import HeaderLog from './HeaderLog'

const PaymentPicker = () => {
    return (
        <>
        <HeaderLog textButton ="Cerrar Sesión" />
        
        <div className="pyment-container">
            <img className='candado' src={candado} alt="candado" />

            <span className='step'>PASO <strong>3</strong> DE <strong>3</strong></span>

            <h1 className='title'>Elige cómo quieres pagar</h1>

            <div className="contextRow" data-uia="">Tu forma de pago está encriptada y puedes cambiarla cuando quieras.</div>

            <div className="contextRowEmphasized"> <span>Transacciones seguras y confiables.</span></div>
            <div className="contextRowEmphasizeds"><span className='context'>Cancela fácilmente online.</span></div>

            <div className="bannerOption">
                <div className="cardOptions">
                    <p>Tarjeta de crédito o debito</p>

                    <div className="iconsEnterprise">
                        <img className='pay' src={visa} alt="visa" />
                        <img className='pay' src={mastercard} alt="mastercard" />
                        <img className='pay' src={amex} alt="amex" />
                        <img className='pay' src={diners} alt="diners" />
                        <img className='pay' src={flecha} alt="" />
                    </div>
                </div>

                <div className="cardOptions">
                    <p>Efecty</p>

                    <div className="iconsEnterprise">
                        <img className='pay' src={efecty} alt="efecty" />
                        <img src={flecha} className='arrow2' alt="arrow" />
                    </div>
                </div>

                <div className="cardOptions">
                    <p>Código de Netflix</p>

                    <div className="iconsEnterprise">
                        <img className='pay' src={gift} alt="gift code" />
                        <img src={flecha} className='arrow3' alt="" />
                    </div>
                </div>
            </div>
        </div>

            <Footer />
        </>
    )
}

export default PaymentPicker
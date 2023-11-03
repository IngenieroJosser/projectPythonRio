import React from 'react'

import '../../scss/registry/_Content.scss'

const Content = () => {
    return (
        <>
            <div className="content">
                <p>PASO <strong>1</strong> DE <strong>3</strong></p>
                <h1>¡Hola de nuevo!</h1>
                <h1 className='Subscribe'>Suscribirte a Netflix es fácil.</h1>
                <span className='password'>Ingresa tu contraseña para comenzar a ver al instante.</span>
            </div>
        </>
    )
}

export default Content
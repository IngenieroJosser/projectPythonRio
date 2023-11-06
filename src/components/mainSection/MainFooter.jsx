const MainFooter = () => {
  return (
    <>
    <footer className='MainFooter'>
        <span>¿Preguntas? Llama al <u>01 800 917 1564</u></span>
        <div className="main-footer-container">
          <div className="footer-item">
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Relaciones con inversionistas</a>
            <a href="#">Formas de ver</a>
            <a href="#">Información corporativa</a>
            <a href="#">Solo en Netflix</a>
            <select className="lenguaje-selector">
                    <option value="">
                    Español
                    </option>
                    <option value="">
                        English
                    </option>
                </select>
            <span>Netflix Colombia</span>
          </div>
          <div className="footer-item">
            <a href="#">Centro de ayuda</a>
            <a href="#">Empleo</a>
            <a href="#">Términos de uso</a>
            <a href="#">Contáctanos</a>
          </div>
          <div className="footer-item">
            <a href="#">Cuenta</a>
            <a href="#">Canjear tarjetas de regalo</a>
            <a href="#">Privacidad</a>
            <a href="#">Prueba de velocidad</a>
          </div>
          <div className="footer-item">
            <a href="#">Prensa</a>
            <a href="#">Comprar tarjetas de regalo</a>
            <a href="#">Preferencias de cookies</a>
            <a href="#">Avisos legales</a>
          </div>
        </div>
    </footer>
    </>
  )
}

export default MainFooter
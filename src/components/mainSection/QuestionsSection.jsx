import Question from "./Question"
import { useNavigate } from "react-router-dom"

const QuestionsSection = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/content')
    }

  return (
    <>
        <div className="questions-container">
            <h1 className="Question-title">Preguntas frecuentes</h1>
            <div className="question-content">
                <Question 
                    title="¿Qué es Netflix?"
                    description="Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
                    Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
                />
                <Question 
                    title="¿Cuánto cuesta Netflix?"
                    description="Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 16.900 hasta $ 38.900 al mes. Sin costos adicionales ni contratos."
                />
                <Question 
                    title="¿Dónde puedo ver Netflix?"
                    description="Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.
                    Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."
                />
                <Question 
                    title="¿Cómo cancelo?"
                    description="Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras."
                />
                <Question 
                    title="¿Qué puedo ver en Netflix?"
                    description="Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras."
                />
                <Question 
                    title="¿Es bueno Netflix para los niños?"
                    description="La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.
                    Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."
                />
            </div>

            <div className="banner-inputs-container">
                    <input type="email" name="" id="" placeholder='Email' />
                    <button className='Primary-button extralarge' onClick={handleClick}>Comenzar</button>
            </div>
        </div>
    </>
  )
}

export default QuestionsSection
import { useState, useEffect } from 'react';
import '../../../scss/Movie/_StaticCover.scss';
import mainMovie from '../../../assets/img/textMovie.png';

const StaticCover = () => {
    const [showPoster, setShowPoster] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setShowPoster(!showPoster);
    }, 3000); // Retraso de 3 segundos (ajusta según sea necesario)

    return () => {
        clearTimeout(timeoutId);
    };
  }, [showPoster]); // El efecto se ejecutará solo una vez al montar el componente

    return (
        <>
            <video className='StaticCover' autoPlay loop muted poster={showPoster ? "src/assets/img/portadaMovies.jpg" : ""}>
                <source src="src/assets/videos/Temporada 1 (Tráiler)_ Amor, aquí y ahora _ Tráiler en Español _ Netflix.mp4" type="video/mp4" />
            </video>
            <img className='textMain' src={mainMovie} alt="imgPrincipal" />
        </>
    );
};

export default StaticCover;
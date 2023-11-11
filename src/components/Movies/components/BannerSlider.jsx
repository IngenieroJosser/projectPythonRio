import '../../../scss/Movie/_BannerSlider.scss';


import movie1 from '../../../assets/img/movies/movie1.jpg';
import movie2 from '../../../assets/img/movies/movie2.jpg';
import movie3 from '../../../assets/img/movies/movie3.jpg';
import movie4 from '../../../assets/img/movies/movie4.jpg';
import movie5 from '../../../assets/img/movies/movie5.jpg';
import movie6 from '../../../assets/img/movies/movie6.jpg';

const BannerSlider = () => {
    const bannerMovies1 = [
        { 'image': movie1, 'alt': 'Pelicula 1' },
        { 'image': movie2, 'alt': 'Película 2' },
        { 'image': movie3, 'alt': 'Película 3' },
        { 'image': movie4, 'alt': 'Película 4' },
        { 'image': movie5, 'alt': 'Película 5' },
        { 'image': movie6, 'alt': 'Película 6' },
    ];

    const bannerMovies2 = [
        { 'image': movie6, 'alt': 'Película 6' },
        { 'image': movie2, 'alt': 'Película 2' },
        { 'image': movie4, 'alt': 'Película 4' },
        { 'image': movie1, 'alt': 'Pelicula 1' },
        { 'image': movie3, 'alt': 'Película 3' },
        { 'image': movie5, 'alt': 'Película 5' },
    ];

    const bannerMovies3 = [
        { 'image': movie1, 'alt': 'Pelicula 1' },
        { 'image': movie3, 'alt': 'Película 3' },
        { 'image': movie5, 'alt': 'Película 5' },
        { 'image': movie4, 'alt': 'Película 4' },
        { 'image': movie2, 'alt': 'Película 2' },
        { 'image': movie6, 'alt': 'Película 6' },
    ];


    return (
    <>
        <div className="FilmFrame">
            <h3 className='textCover'>Nuestra selección para Los Hackers</h3>
            <div className="slider">
                {bannerMovies1.map((item, index) => (
                <img
                    key={index}
                    src={item.image}
                    alt={item.alt}
                    // className={index === currentSlide ? 'active' : 'inactive'}
                />
                ))}
                {/* <button onClick={prevSlide}>Anterior</button> */}
                {/* <button onClick={nextSlide}>Siguiente</button> */}
            </div>
        </div>

        <div className="FilmFrame">
            <h3 className='textCover'>Continuar viendo contenido como Los Hackers</h3>
            <div className="slider">
                {bannerMovies2.map((item, index) => (
                <img
                    key={index}
                    src={item.image}
                    alt={item.alt}
                    // className={index === currentSlide ? 'active' : 'inactive'}
                />
                ))}
                {/* <button onClick={prevSlide}>Anterior</button> */}
                {/* <button onClick={nextSlide}>Siguiente</button> */}
            </div>
        </div>

        <div className="FilmFrame">
            <h3 className='textCover'>Tendecias</h3>
            <div className="slider">
                {bannerMovies3.map((item, index) => (
                <img
                    key={index}
                    src={item.image}
                    alt={item.alt}
                    // className={index === currentSlide ? 'active' : 'inactive'}
                />
                ))}
                {/* <button onClick={prevSlide}>Anterior</button> */}
                {/* <button onClick={nextSlide}>Siguiente</button> */}
            </div>
        </div>
    </>
    );
};

export default BannerSlider;

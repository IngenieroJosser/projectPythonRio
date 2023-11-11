import '../../../scss/Movie/_BannerSlider.scss';


import movie1 from '../../../assets/img/movies/movie1.jpg';
import movie2 from '../../../assets/img/movies/movie2.jpg';
import movie3 from '../../../assets/img/movies/movie3.jpg';
import movie4 from '../../../assets/img/movies/movie4.jpg';
import movie5 from '../../../assets/img/movies/movie5.jpg';
import movie6 from '../../../assets/img/movies/movie6.jpg';
import movie7 from '../../../assets/img/movies/movie7.jpg';
import movie8 from '../../../assets/img/movies/movie8.jpg';
import movie9 from '../../../assets/img/movies/movie9.jpg';
import movie10 from '../../../assets/img/movies/movie10.jpg';
import movie11 from '../../../assets/img/movies/movie11.jpg';
import movie12 from '../../../assets/img/movies/movie12.jpg';
import movieAsian1 from '../../../assets/img/movies/movieAsian1.jpg';
import movieAsian2 from '../../../assets/img/movies/movieAsian2.jpg';
import movieAsian3 from '../../../assets/img/movies/movieAsian3.jpg';
import movieAsian4 from '../../../assets/img/movies/movieAsian4.jpg';
import movieAsian5 from '../../../assets/img/movies/movieAsian5.jpg';

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
        { 'image': movie12, 'alt': 'Pelicula 1' },
        { 'image': movie7, 'alt': 'Película 3' },
        { 'image': movie8, 'alt': 'Película 5' },
        { 'image': movie9, 'alt': 'Película 4' },
        { 'image': movie10, 'alt': 'Película 2' },
        { 'image': movie11, 'alt': 'Película 6' },
    ];

    const asianSeries = [
        { 'image': movieAsian1, 'alt': 'Serie 1' },
        { 'image': movieAsian2, 'alt': 'Serie 3' },
        { 'image': movieAsian3, 'alt': 'Serie 5' },
        { 'image': movieAsian4, 'alt': 'Serie 4' },
        { 'image': movieAsian5, 'alt': 'Serie 2' },
    ];

    // const popularMovies = [
    //     { 'image': popular1, 'alt': 'Pelicula 1' },
    //     { 'image': popular2, 'alt': 'Película 3' },
    //     { 'image': popular3, 'alt': 'Película 5' },
    //     { 'image': popular4, 'alt': 'Película 4' },
    //     { 'image': popular5, 'alt': 'Película 2' },
    // ];


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

        <div className="FilmFrame">
            <h3 className='textCover'>Series asiaticas para enamorarse</h3>
            <div className="slider">
                {asianSeries.map((item, index) => (
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

import MovieHeader from "./components/MovieHeader"
import MovieFooter from "./components/StaticCover"
import StaticCover from "./components/MovieFooter"
import BannerSlider from "./components/BannerSlider"

const MovieSection = () => {
  return (
    <>
    <MovieHeader/>
    <MovieFooter/>
    <BannerSlider />
    <StaticCover />
    </>
  )
}

export default MovieSection
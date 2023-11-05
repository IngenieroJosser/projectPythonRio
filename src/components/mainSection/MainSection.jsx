import MainHeader from "./MainHeader"
import MainBanner from "./MainBanner"
import EnjoySection from "./EnjoySection"
import EnjoySectionInverted from "./EnjoySectionInverted"
import QuestionsSection from "./QuestionsSection"
import MainFooter from "./MainFooter"

import ImageTV from '../../assets/img/tv.png';
import ImageCel from "../../assets/img/cel.png";
import ImageTV2 from '../../assets/img/tv-2.png';
import ImageKids from "../../assets/img/kids.png";

const MainSection = () => {
  return (
    <>
        <MainHeader/>
        <MainBanner/>
        <EnjoySection 
          title="Disfruta en tu TV" 
          description="Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más." 
          image={ImageTV} 
        />
        <EnjoySectionInverted
          title="Descarga tus series para verlas offline" 
          description="Guarda tu contenido favorito y tendrás siempre algo para ver." 
          image={ImageCel} 
        />
        <EnjoySection 
          title="Disfruta donde quieras" 
          description="Películas y series ilimitadas en tu teléfono, tablet, computadora y TV." 
          image={ImageTV2} 
        />
        <EnjoySectionInverted
          title="Crea perfiles para niños" 
          description="Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía." 
          image={ImageKids} 
        />
        <QuestionsSection/>
        <MainFooter/>
    </>
  )
}

export default MainSection
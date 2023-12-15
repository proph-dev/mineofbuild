import { Helmet } from 'react-helmet';
import { Section } from '../../components/utils/layouts/Section';
import { Container } from '../../components/utils/layouts/Container';
import { Title } from '../../components/utils/typos/Title';
import { Caption } from '../../components/utils/typos/Caption';
import { MainCta } from '../../components/utils/buttons/MainCta';
import style from './home.module.scss';

import BackgroundImg from '../../../assets/img/homepage-render.jpg';
import Arrow from '../../../assets/img/arrow.svg';
import Render from '../../../assets/img/render-homepage.png';

import CarrerBlue from '../../../assets/img/carre-blue.png';
import CarrerYellow from '../../../assets/img/carre-yellow.png';
import TriangleBlue from '../../../assets/img/triangle-blue.png';
import TriangleYellow from '../../../assets/img/triangle-yellow.png';
import CroixBlue from '../../../assets/img/croix-blue.png';
import CroixYellow from '../../../assets/img/croix-yellow.png';
import CircleBlue from '../../../assets/img/circle-blue.png';
import CircleYellow from '../../../assets/img/circle-yellow.png';


function Home() {  
  return (
    <>
        <Helmet>
            <title>Mine Of Build | Minecraft BuildTeam</title>
        </Helmet>

        <Section className={ style.bannerHero }>
          <img src={ BackgroundImg } alt="Image de fond de Mine Of Build" className={ style.bgImage } />
          <div className={ style.overlay1 }></div>
          
          <div className={ style.iconsGeometric }>
            <img src={ CarrerBlue } alt="" className={ style.icon1 } />
            <img src={ TriangleYellow } alt="" className={ style.icon2 } />
            <img src={ CroixYellow } alt="" className={ style.icon3 } />
            <img src={ TriangleBlue } alt="" className={ style.icon4 } />
          </div>

          <div className={ style.overlay2 }></div>

          <Container flex>
            <div className={ style.text }>
              <Title>
                Laissez vos rêves prendre vie <span>grâce à nos talents</span>
                <Caption>Équipe de build Minecraft professionnelle</Caption>
              </Title>

              <MainCta url="/" extern>
                Rejoindre notre Discord
              </MainCta>
              
              <div className={ style.ctaArrow }>
                <img src={ Arrow } alt="Flèche" />
                <span>Clique ici !</span>
              </div>
            </div>

            <div className={ style.image }>
              <img src={ Render } alt="" className={ style.renderImg } />

              <img src={ TriangleBlue } alt="" className={ style.icon1 } />
              <img src={ CarrerYellow } alt="" className={ style.icon2 } />
              <img src={ CircleBlue } alt="" className={ style.icon3 } />
              <img src={ CroixYellow } alt="" className={ style.icon4 } />
            </div>
          </Container>
        </Section>
    </>
  );
}

export default Home;
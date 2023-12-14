import { Helmet } from 'react-helmet';
import { Section } from '../../components/utils/layouts/Section';
import { Container } from '../../components/utils/layouts/Container';
import { Title } from '../../components/utils/typos/Title';
import { Caption } from '../../components/utils/typos/Caption';
import style from './home.module.scss';

import BackgroundImg from '../../../assets/img/homepage-render.jpg';

function Home() {  
  return (
    <>
        <Helmet>
            <title>Mine Of Build | Minecraft BuildTeam</title>
        </Helmet>

        <Section className={ style.bannerHero }>
          <div className={ style.overlay }></div>
          <img src={ BackgroundImg } alt="Image de fond de Mine Of Build" className={ style.bgImage } />
          
          <Container flex>
            <div className={ style.text }>
              <Title>
                Laissez vos rêves prendre vie grâce à nos talents
                <Caption>Équipe de build Minecraft professionnelle</Caption>
              </Title>
            </div>

            <div className={ style.image }>
              
            </div>
          </Container>
        </Section>
    </>
  );
}

export default Home;
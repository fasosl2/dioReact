import React from 'react';
import  bannerImage from '../../assets/banner-crop.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, Title, TitleHighlight, TextContent, HomeBanner } from './styles';
const Home = () => {
    return(<> 
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    o seu futuro Global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts. 
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={()=> null} />
            </div>
            <div>
                <HomeBanner src={bannerImage} alt="Imagem Principal" />
            </div>
        </Container>
    </>)
}

export { Home }
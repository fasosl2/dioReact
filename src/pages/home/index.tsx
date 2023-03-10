import React from 'react';

import { useNavigate } from 'react-router-dom';

import  bannerImage from '../../assets/banner-crop.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Container, ContainerSection} from '../../styles/global';

import { Title, TitleHighlight, TextContent, HomeBanner } from './styles';
const Home = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    return(<> 
        <Header />
        <Container>
            <ContainerSection>
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
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn} />
            </ContainerSection>
            <ContainerSection>
                <HomeBanner src={bannerImage} alt="Imagem Principal" />
            </ContainerSection>
        </Container>
    </>)
}

export { Home }
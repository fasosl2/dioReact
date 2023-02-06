import React from 'react';
import  bannerImage from '../../assets/banner-crop.png'
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Container, Title, TitleHighlight, TextContent, HomeBanner } from './styles';
const Feed = () => {
    return(<> 
        <Header />
        <Container>
            <Card />
        </Container>
    </>)
}

export { Feed }
import React from 'react';
import { Button } from '../Button';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

import { 
    BuscarInputContainer,
    //Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";
const Header = ({autenticado}) => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/')
    }
    return(
    <Wrapper >
        <Container >
            <Row >
                <img src={logo} alt="logo da Dio" onClick={handleClickSignIn}/>
                {autenticado ? (
                    <>
                        <BuscarInputContainer >
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row >
            {autenticado ? (
                <>
                    <UserPicture src="https://avatars.githubusercontent.com/u/66625225?v=4"/>
                </>
                ) : (
                <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </>

                )}
            </Row>
        </Container>
    </Wrapper>)
}

export { Header }
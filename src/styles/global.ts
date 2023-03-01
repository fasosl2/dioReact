import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family:'Open Sans';
}

body{
    background-color: #1E192C;
    color: #FFFFFF;
    font-family:'Open Sans';
}
`;


export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 750px) {
        margin-top: 0px;
        grid-template-columns: 1fr;
    }
    
`;

export const ContainerSection = styled.div`
    width: auto;
    min-width: 350px;
    height: 100vh;
    padding: 10px;
    @media screen and (max-width: 750px) {
        height: 50vh;
    }
`;
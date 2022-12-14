import styled from "styled-components"

export const Body = styled.main`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    rigth: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
`

export const Note = styled.p`
    font-family: 'Nunito', sans-serif;
    display: flex;
    text-align: center;
    font-size: 30px;
    weight: 400;
    width: 330px;
    color: #464d59;

    @media (min-width: 768px) {
        font-size: 40px;
        width: 630px;
    }
`
import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`

export const H1 = styled.h1`
    font-family: 'Varela Round', sans-serif;
    display: flex;
    text-align: center;
    font-size: 36px;
    weight: 400;
    color: #464d59;
    margin-top: 130px;
`

export const Text = styled.p`
    font-family: 'Nunito', sans-serif;
    text-align: justify;
    font-size: 22px;
    line-height: 26px;
    weight: 400;
    color: #464d59;
    width: 330px;
    margin-top: 30px;

    @media (min-width: 768px) {
        font-size: 28px;
        weight: 400;
        color: #464d59;
        width: 600px;
        margin-top: 30px;
    }
`

export const Img = styled.img`
    width: 200px;
    margin-top: 10px;
`
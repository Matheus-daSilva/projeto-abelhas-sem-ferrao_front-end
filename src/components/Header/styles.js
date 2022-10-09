import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f7d88b;
    padding-left: 25px;
    padding-right: 25px;
    height: 60px;
    z-index: 3;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
`

export const Image = styled.img`
    height: 40px;
    width: 40px;
    z-index: 2;
`

export const Title = styled.h1`
    font-family: 'Varela Round', sans-serif;
    display: flex;
    text-align: center;
    justify-content: center;
    color: #ffffff;
    font-size: 15px;
`

export const Logo = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

export const Icon = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
`

export const Body = styled.main`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    rigth: 0px;
    display: flex;
    justify-content: center;
    background: #f7d88b;
    z-index: 2;
`

export const Pages = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
    margin-top: 100px;

`

export const Pages2 = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        margin-rigth: 20px;
        cursor: pointer;
    }
`

export const P = styled.p`
    font-family: 'Varela Round', sans-serif;
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 30px;
`

export const P2 = styled.p`
    font-family: 'Varela Round', sans-serif;
    color: #ffffff;
    font-size: 15px;
`

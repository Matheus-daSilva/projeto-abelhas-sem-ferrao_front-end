import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    rigth: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7d88b;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 140px;
`

export const Input = styled.input`
    font-family: 'Nunito', sans-serif;
    width: 345px;
    height: 55px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    color: #000000;
    margin-bottom: 13px;
    padding-left: 15px;
    font-size: 20px;
`

export const Button = styled.button`
    font-family: 'Nunito', sans-serif;
    width: 345px;
    height: 55px;
    border: none;
    border-radius: 5px;
    background-color: #f27281;
    color: #fff;
    margin-bottom: 13px;
    text-align: center;
    font-size: 20px;
`

export const P = styled.p`
    font-family: 'Varela Round', sans-serif;
    color: #464d59;
    font-size: 18px;
    margin-top: 13px;
`
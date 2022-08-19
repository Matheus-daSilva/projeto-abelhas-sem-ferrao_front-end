import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`

export const Text = styled.p`
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

export const Form = styled.form`
    width: 100%;
    min-height: 190px;
    display: flex;
    margin-top: 100px;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`

export const Input = styled.input`
    font-family: 'Nunito', sans-serif;
    width: 340px;
    height: 45px;
    border-radius: 15px;
    background-color: #ffffff;
    color: #464d59;
    margin-bottom: 13px;
    padding-left: 15px;
    font-size: 20px;
    border: 0.5px solid #464d59;
`

export const Button = styled.button`
    font-family: 'Nunito', sans-serif;
    width: 340px;
    height: 45px;
    border: none;
    border-radius: 15px;
    background-color: #f27281;
    color: #fff;
    margin-bottom: 13px;
    text-align: center;
    font-size: 20px;
`
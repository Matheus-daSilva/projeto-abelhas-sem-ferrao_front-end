import styled from "styled-components"

export const Container = styled.div`
    width: 375px;
    min-height: 132px;
    background: #f7d88b;
    border-radius: ${(props) => (props.comment ? "16px 16px 0 0" : "16px")};
    margin-bottom: ${(props) => (props.comment ? `${props.comments*50+120}px` : "70px")};
    @media (min-width: 768px) {
        width: 611px;
        min-height: 176px;
        background: #f7d88b;
        border-radius: ${(props) => (props.comment ? "16px 16px 0 0" : "16px")};
}
`

export const User = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 15px;
`

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;

    @media (min-width: 768px) {
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
      }
`

export const Username = styled.h3`
    font-family: 'Varela Round', sans-serif;
    color: #464d59;
    font-size: 18px;
    margin-left: 5px;
`

export const Icons = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
    margin-right: 15px;
    justify-content: space-between;
`

export const Top = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
`

export const Description = styled.p`
    font-family: 'Varela Round', sans-serif;
    width: 300px;
    color: #464d59;
    font-size: 14px;
    margin-left: 50px;
    margin-top: 20px;
    line-heigth: 16px;
`

export const Link = styled.a`
    font-family: 'Varela Round', sans-serif;
    text-decoration: none;
    font-size: 18px;
    color: #464d59;
    cursor: pointer;
    margin-left: 50px;
    margin-top: 20px;
    width: 300px;
`
import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 100px;
    margin-bottom: 30px;
    padding-bottom: 20px;

    @media (min-width: 768px) {
        width: 611px;
        min-height: 176px;
        border-radius: 16px;
        border: 0.5px solid #464d59;
}
`

export const User = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 15px;
`

export const Username = styled.h3`
    font-family: 'Varela Round', sans-serif;
    color: #464d59;
    font-size: 18px;
    margin-left: 50px;
`

export const Icons = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
    margin-right: 50px;
    justify-content: space-between;
`

export const Top = styled.div`
      display: flex;
      background: #f7d88b;
      height: 40px;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 768px) {
        border-radius: 16px 16px 0 0;
}
`
export const Text = styled.div`
    width: 100%
    padding-left: 50px;
    padding-right: 50px;
`

export const Description = styled.p`
    font-family: 'Varela Round', sans-serif;
    width: 85%;
    color: #464d59;
    font-size: 14px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
    line-height: 1.8em;
    text-align: justify;
`

export const Icons2 = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
    margin-right: 50px;
    margin-left: 50px;
    margin-top: 40px;
    justify-content: space-between;
`


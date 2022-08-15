import * as S from "./styles"
import { useNavigate } from "react-router-dom"
import { FiAlignJustify, FiChevronDown } from "react-icons/fi"
import abelha from "../../assets/img/abelha.png"
import { useState } from "react"

export default function Header() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const storage = localStorage.getItem("token")

    if (!show) {
        return (
            <>
                <S.Header>
                    <S.Logo onClick={() => navigate("/")}>
                        <S.Image src={abelha} />
                        <S.Title>Abelhas Sem Ferrão</S.Title>
                    </S.Logo>
                    <S.Icon onClick={() => setShow(!show)}>
                        < FiAlignJustify color="#ffffff" size={30} />
                    </S.Icon>
                    <S.Pages2>
                        <S.P2>Home</S.P2>
                        <S.P2>Fórum</S.P2>
                        <S.P2 onClick={() => navigate("/games")}>Games</S.P2>
                        <S.P2 onClick={() => navigate("/signin")}>{!storage ? "Login" : "Logout"}</S.P2>
                    </S.Pages2>
                </S.Header>
            </>
        )
    } else {
        return (
            <>
                <S.Header>
                    <S.Logo onClick={() => navigate("/")}>
                        <S.Image src={abelha} />
                        <S.Title>Abelhas Sem Ferrão</S.Title>
                    </S.Logo>
                    <S.Icon onClick={() => setShow(!show)}>
                        < FiChevronDown color="#ffffff" size={30} />
                    </S.Icon>
                </S.Header>
                <S.Body>
                    <S.Pages>
                        <S.P>Home</S.P>
                        <S.P>Fórum</S.P>
                        <S.P onClick={() => navigate("/games")}>Games</S.P>
                        <S.P onClick={() => navigate("/signin")}>{!storage ? "Login" : "Logout"}</S.P>
                    </S.Pages>
                </S.Body>
            </>
        )

    }
}
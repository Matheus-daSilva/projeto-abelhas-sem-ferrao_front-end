import * as S from "./styles"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    return (
        <>
            <S.Container>
                <S.Form>
                    <S.Input
                        type="email"
                        placeholder="Email"
                    ></S.Input>
                    <S.Input
                        type="password"
                        placeholder="Senha"
                    ></S.Input>
                    <S.Button>Entrar</S.Button>
                </S.Form>
                <S.P onClick={() => navigate("/signup")}>Não possuí um conta? Cadastre-se</S.P>
            </S.Container>
        </>
    )
}
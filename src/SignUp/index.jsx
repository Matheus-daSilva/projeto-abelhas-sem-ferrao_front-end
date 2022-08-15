import * as S from "./styles"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()

    return (
        <>
            <S.Container>
                <S.Form>
                    <S.Input
                        type="text"
                        placeholder="Apelido"
                    ></S.Input>
                    <S.Input
                        type="email"
                        placeholder="Email"
                    ></S.Input>
                    <S.Input
                        type="password"
                        placeholder="Password"
                    ></S.Input>
                    <S.Input
                        type="password"
                        placeholder="Confirmação"
                    ></S.Input>
                    <S.Input
                        type="url"
                        placeholder="Link de uma foto"
                    ></S.Input>
                    <S.Button>Cadastrar</S.Button>
                </S.Form>
                <S.P onClick={() => navigate("/signin")}>Já possuí uma conta? Entre</S.P>
            </S.Container>
        </>
    )
}
import * as S from "./styles"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })
    const navigate = useNavigate()

    return (
        <>
            <S.Container>
                <S.Form onSubmit={register}>
                    <S.Input
                        required
                        disabled={loading}
                        type="text"
                        placeholder="Apelido"
                        onChange={(e) => setForm({...form, username: e.target.value})}
                    ></S.Input>
                    <S.Input
                        required
                        disabled={loading}
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setForm({...form, email: e.target.value})}
                    ></S.Input>
                    <S.Input
                        required
                        disabled={loading}
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setForm({...form, password: e.target.value})}
                    ></S.Input>
                    <S.Input
                        required
                        disabled={loading}
                        type="password"
                        placeholder="Confirmação de senha"
                        onChange={(e) => setForm({...form, passwordConfirmation: e.target.value})}
                    ></S.Input>
                    <S.Button type="submit">Cadastrar</S.Button>
                </S.Form>
                <S.P onClick={() => navigate("/signin")}>Já possuí uma conta? Entre</S.P>
            </S.Container>
        </>
    )

    async function register(event) {
        event.preventDefault()
        setLoading(true)

        console.log(process.env.REACT_APP_API_URL)

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}signup`, form)
        promisse.then(response => {
            const {data} = response
            setLoading(false)
            navigate("/signin")
        })
        promisse.catch(() => {
            setLoading(false)
            warning()
        })
    }

    function warning() {
        alert('Não foi possível executar a ação');
      }
}
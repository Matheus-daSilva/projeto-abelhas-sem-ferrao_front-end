import * as S from "./styles"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    return (
        <>
            <S.Container>
                <Header></Header>
                <S.Form onSubmit={register}>
                    <S.Input
                        type="email"
                        placeholder="Email"
                        disabled={loading}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    ></S.Input>
                    <S.Input
                        type="password"
                        placeholder="Senha"
                        disabled={loading}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    ></S.Input>
                    <S.Button
                        type="submit"
                        disabled={loading}>
                        Entrar
                    </S.Button>
                </S.Form>
                <S.P onClick={() => navigate("/signup")}>Não possuí um conta? Cadastre-se</S.P>
            </S.Container>
        </>
    )

    async function register(event) {
        event.preventDefault()
        setLoading(true)

        const promisse = axios.post("http://localhost:4000/signin", form)
        promisse.then(response => {
            const {data} = response
            localStorage.setItem("token", data)
            setLoading(false)
            navigate("/forum")
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
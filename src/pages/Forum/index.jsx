import * as S from "./styles.js"
import axios from "axios"
import Header from "../../components/Header"
import { useState } from "react"


export default function Forum() {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        url: "",
        description: ""
    })

    const storage = localStorage.getItem("token")

    const config = {
        headers: {
            Authorization: `Bearer ${storage}`
        }
    }

    if (!storage) {
        return (
            <>
                <S.Container>
                    <Header></Header>
                    <S.Text>Logue-se para ter acesso ao fórum :)</S.Text>
                </S.Container>
            </>
        )
    } else {
        return (
            <>
                <S.Container2>
                    <Header></Header>
                    <S.Form onSubmit={register}>
                        <S.Input
                            type="url"
                            placeholder="Link"
                            disabled={loading}
                            onChange={(e) => setForm({...form, url: e.target.value})}
                        ></S.Input>
                        <S.Input
                            type="text"
                            placeholder="No que você está pensando?"
                            disabled={loading}
                            onChange={(e) => setForm({...form, description: e.target.value})}
                        ></S.Input>
                        <S.Button
                            type="submit"
                            disabled={loading}
                        >
                            Enviar
                        </S.Button>
                    </S.Form>
                </S.Container2>
            </>
        )
    }

    async function register(event) {
        event.preventDefault()
        setLoading(true)

        const promisse = axios.post("http://localhost:4000/publications", form, config)
        promisse.then(response => {
            const { data } = response
            console.log(data)
            setLoading(false)
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
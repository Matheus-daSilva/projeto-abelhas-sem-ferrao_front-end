import * as S from "./styles.js"
import axios from "axios"
import Header from "../../components/Header"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Posts from "../../components/Posts/index.jsx"


export default function Forum() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        description: ""
    })
    const navigate = useNavigate()

    const storage = localStorage.getItem("token")

    const config = {
        headers: {
            Authorization: `Bearer ${storage}`
        }
    }

    useEffect(async () => {
        if (!storage) navigate("/signin")

        const request = axios.get(`${process.env.REACT_APP_API_URL}publications`, config)
        request.then(response => {
            const { data } = response
            console.log(data)
            setPosts(data)
        })
        request.catch(() => {
            console.log(request)
        })
    }, [])

    return (
        <>
            <S.Container>
                <Header></Header>
                <S.Form onSubmit={register}>
                    <S.Input
                        type="text"
                        placeholder="No que você está pensando?"
                        disabled={loading}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                    ></S.Input>
                    <S.Button
                        type="submit"
                        disabled={loading}
                        >
                        Enviar
                    </S.Button>
                </S.Form>
                {posts.map((post) => {
                    return (
                        <Posts
                            id={post.id}
                            userId={post.userId}
                            username={post.username}
                            description={post.description}
                            likes={post.likes}
                            comments={post.comments}
                        />
                    )
                })}
            </S.Container>
        </>
    )
    async function register(event) {
        event.preventDefault()
        setLoading(true)

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}publications`, form, config)
        promisse.then(response => {
            const { data } = response
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


import * as S from "./styles.js";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { CgBee } from "react-icons/cg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Posts(props) {
  const data = props;
  const userId = localStorage.getItem("userId")
  const storage = localStorage.getItem("token")
  const [update, setUpdate] = useState(false)
  const [comment, setComment] = useState(false)
  const [sendComment, setSendComment] = useState({
    comment: "",
    publicationId: Number(data.id)
  })
  const [loading, setLoading] = useState(false)
  const [liked, setLiked] = useState(false)
  const [form, setForm] = useState({
    description: ""
  })
  
  const likesInfos = {
    publicationId: data.id,
    userId: Number(userId)
  }

  const config = {
      headers: {
          Authorization: `Bearer ${storage}`,
      }
  }

useEffect(() => {
  findLike()
}, [])
  
if (comment === true) {
  return (
        <>
          <S.Container key={data.id}>
            <S.Top>
              <S.Username>{data.username}</S.Username>
              <S.Icons>
              </S.Icons>
            </S.Top>
            <S.Text>
              <S.Description>{data.description}</S.Description>
            </S.Text>
            {data.comments.map((comment) => {
              if(data.comments.length > 0) {
                return (
                  <>
                    <S.Comment>
                      <h3>{comment.username}</h3>
                      <p>{comment.comment}</p>
                    </S.Comment>
                  </>
                )
              }
            })}
            <S.Form onSubmit={postComment}>
              <S.Input
                type="text"
                autoFocus
                placeholder="Digite o seu comentário"
                disabled={loading}
                onChange={(e) => setSendComment({ ...sendComment, comment: e.target.value })}
              ></S.Input>
            <S.Button  
              type="submit" 
              disabled={loading}
              >
              Enviar comentário
            </S.Button>
          </S.Form>
            <S.Icons2>
            <S.Div>
            <S.Likes onClick={() => likePublication()}>
              {liked ? <CgBee size={20} color="#f27281" /> : <CgBee size={20} />}
            </S.Likes>
              <p>{data.likes.length}</p>
              <p>Curtidas</p>
            </S.Div>
            <S.Div>
              <FaRegComment size={20} onClick={() => {
                setComment(!comment)
                }}/>
                <p>{data.comments.length}</p>
                <p>Comentários</p>
            </S.Div>
            </S.Icons2>
          </S.Container>
        </>
      );
  }
  
  else if (update == true) {
    return (
      <>
        <S.Container key={data.id}>
          <S.Top>
            <S.Username>{data.username}</S.Username>
            <S.Icons>
              <AiFillEdit color="#464d59" size={20} onClick={() => setUpdate(false)}/>
              <AiFillDelete color="#464d59" size={20} onClick={() => deletePost()}/>
            </S.Icons>
          </S.Top>
          <S.Form onSubmit={updatePost}>
            <S.Input
                type="text"
                autoFocus
                placeholder="No que você está pensando?"
                disabled={loading}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
            ></S.Input>
            <S.Button  
              type="submit" 
              disabled={loading}
              >
              Atualizar
            </S.Button>
          </S.Form>
        </S.Container>
      </>
    );
  }
  else if (Number(data.userId) === Number(userId)) {
    return (
      <>
        <S.Container key={data.id}>
          <S.Top>
            <S.Username>{data.username}</S.Username>
            <S.Icons>
              <AiFillEdit color="#464d59" size={20} onClick={() => {
                setUpdate(true)
                }}/>
              <AiFillDelete color="#464d59" size={20} onClick={() => deletePost()}/>
            </S.Icons>
          </S.Top>
          <S.Text>
            <S.Description>{data.description}</S.Description>
          </S.Text>
          <S.Icons2>
          <S.Div>
            <S.Likes onClick={() => likePublication()}>
              {liked ? <CgBee size={20} color="#f27281" /> : <CgBee size={20} />}
            </S.Likes>
              <p>{data.likes.length}</p>
              <p>Curtidas</p>
            </S.Div>
            <S.Div>
              <FaRegComment size={20} onClick={() => {
                setComment(!comment)
                }}/>
                <p>{data.comments.length}</p>
                <p>Comentários</p>
            </S.Div>
          </S.Icons2>
        </S.Container>
      </>
    );
  } 
  else {
    return (
      <>
        <S.Container key={data.id}>
          <S.Top>
            <S.Username>{data.username}</S.Username>
            <S.Icons>
            </S.Icons>
          </S.Top>
          <S.Text>
            <S.Description>{data.description}</S.Description>
          </S.Text>
          <S.Icons2>
          <S.Div>
            <S.Likes onClick={() => likePublication()}>
              {liked ? <CgBee size={20} color="#f27281" /> : <CgBee size={20} />}
            </S.Likes>
              <p>{data.likes.length}</p>
              <p>Curtidas</p>
          </S.Div>
            <S.Div>
              <FaRegComment size={20} onClick={() => {
                setComment(!comment)
                }}/>
                <p>{data.comments.length}</p>
                <p>Comentários</p>
            </S.Div>
          </S.Icons2>
        </S.Container>
      </>
    );
  }

  function deletePost(id) {
    const promisse = axios.delete(`${process.env.REACT_APP_API_URL}publications/${data.id}`, form, config)
    promisse.then(response => {
      const { data } = response
    })
    promisse.catch(() => {
      warning()
    })
  }

  function updatePost() {
    setLoading(true)
    const promisse = axios.put(`${process.env.REACT_APP_API_URL}publications/${data.id}`, form, config)
    promisse.then(response => {
      const { data } = response
      console.log(data)
    })
    promisse.catch(() => {
      warning()
    })

  }

  function postComment() {
    setLoading(true)
    const promisse = axios.post(`${process.env.REACT_APP_API_URL}comment`, sendComment, config)
    promisse.then(response => {
      const { data } = response
    })
    promisse.catch(() => {
      warning()
    })
  }

  function likePublication() {
    const promisse = axios.post(`${process.env.REACT_APP_API_URL}likes`, likesInfos, config)
    promisse.then(response => {
      const { data } = response
      setLiked(!liked)
    })
    promisse.catch(() => {
      warning()
    })
  }

  function findLike() {
    for (let i = 0; i < data.likes.length; i++) {
      console.log(data.likes[i].userId)
      console.log(userId)
      if(Number(data.likes[i].userId) === Number(userId)) {
        console.log("dentro do if")
        setLiked(!liked)
      }
    }
  }

  function warning() {
    alert('Algo deu errado. Tente novamente');
  }
}
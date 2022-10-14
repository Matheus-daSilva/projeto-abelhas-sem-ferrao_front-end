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
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    description: ""
  })

  const config = {
      headers: {
          Authorization: `Bearer ${storage}`,
      }
  }

  // useEffect(() => {

  // },[])

  if (update == true) {
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
                console.log("cliquei")
                }}/>
              <AiFillDelete color="#464d59" size={20} onClick={() => deletePost()}/>
            </S.Icons>
          </S.Top>
          <S.Text>
            <S.Description>{data.description}</S.Description>
          </S.Text>
          <S.Icons2>
            <CgBee size={20} />
            <FaRegComment size={20} />
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
            <CgBee size={20} />
            <FaRegComment size={20} />
          </S.Icons2>
        </S.Container>
      </>
    );
  }

  function deletePost(id) {
    const promisse = axios.delete(`${process.env.REACT_APP_API_URL}publications/${data.id}`, form, config)
    promisse.then(response => {
      const { data } = response
      console.log(data)
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

  function warning() {
    alert('Não foi possível executar a ação');
  }
}

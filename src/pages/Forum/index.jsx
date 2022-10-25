import * as S from "./styles.js";
import axios from "axios";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../../components/Posts/index.jsx";
import Loading from "../../components/Loading/index.jsx";
import useInterval from "use-interval";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [observeAPI, setObserveAPI] = useState(null);
  const [form, setForm] = useState({
    description: "",
  });
  const navigate = useNavigate();

  const storage = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${storage}`,
    },
  };

  useEffect(async () => {
    if (!storage) navigate("/signin");

    const request = axios.get(
      `${process.env.REACT_APP_API_URL}publications`,
      config
    );
    request.then((response) => {
      const { data } = response;
      setPosts(data);
    });
    request.catch(() => {
      console.log("1");
    });
  }, [loading]);

  useInterval(() => {
    const request = axios.get(
      `${process.env.REACT_APP_API_URL}publications`,
      config
    );
    request.then((response) => {
      const { data } = response;
      if (observeAPI === null) {
        setObserveAPI(data.length);
      } else if (data.length > observeAPI) {
        toast(`Há ${data.length - observeAPI} novos posts`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setObserveAPI(data.length);
        setLoading(true);
      }
    });
    request.catch(() => {
      toast(`Não foi possível executar a ação`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }, 50000);

  if (posts.length === 0) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <S.Container>
          <Header></Header>
          <S.Form onSubmit={register}>
            <S.Input
              type="text"
              placeholder="No que você está pensando?"
              disabled={loading}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            ></S.Input>
            <S.Button type="submit" disabled={loading}>
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
            );
          })}
        </S.Container>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    );
  }

  async function register(event) {
    event.preventDefault();
    setLoading(true);

    const promisse = axios.post(
      `${process.env.REACT_APP_API_URL}publications`,
      form,
      config
    );
    promisse.then((response) => {
      const { data } = response;
      toast(`Post publicado com sucesso`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
    });
    promisse.catch(() => {
      setLoading(false);
      toast(`Não foi possível executar a ação`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }
}

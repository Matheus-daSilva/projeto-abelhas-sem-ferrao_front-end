import * as S from "./styles";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
          <S.Button type="submit" disabled={loading}>
            Entrar
          </S.Button>
        </S.Form>
        <S.P onClick={() => navigate("/signup")}>
          Não possuí um conta? Cadastre-se
        </S.P>
      </S.Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );

  async function register(event) {
    event.preventDefault();
    setLoading(true);

    const promisse = axios.post(`${process.env.REACT_APP_API_URL}signin`, form);
    promisse.then((response) => {
      const { data } = response;
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      toast(`Login realizado com sucesso`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      navigate("/forum");
    });
    promisse.catch(() => {
      setLoading(false);
      toast(`Não foi possível realizar o login`, {
        position: "top-right",
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

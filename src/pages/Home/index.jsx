import * as S from "./styles";
import abelha from "../../assets/img/abelha-gif.gif";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <S.Container>
        <Header />
        <S.H1>SOBRE NÓS</S.H1>
        <S.Text>
          Nosso propósito é levar conhecimento sobre abelhas nativas para as
          famílias brasileiras que desejam iniciar na apicultura e na
          meliponicultura amadora. Possuímos um fórum onde nossos usuários podem
          postar dúvidas, artigos e links.
        </S.Text>
        <S.Text>
          Também estamos desenvolvendo uma seção de games para as crianças
          aprenderem sobre a importância desses animais no nosso dia a dia.
        </S.Text>
        <S.Img src={abelha} />
      </S.Container>
    </>
  );
}

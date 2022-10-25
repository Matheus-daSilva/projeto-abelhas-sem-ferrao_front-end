import * as S from "./styles.js"
import abelha from "../../assets/img/abelha-gif.gif"

export default function Loading() {
    return (
        <>
          <S.Container>
            <S.Img src={abelha} />
          </S.Container>
        </>
    )
}
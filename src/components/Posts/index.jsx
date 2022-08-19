import * as S from "./styles.js"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"

export default function Posts(props) {
    const data = props

    return (
        <>
            <S.Container key={data.id}>
                <S.Top>
                    <S.User>
                        <S.Img src={data.photo} alt="user picture" />
                        <S.Username>{data.username}</S.Username>
                    </S.User>
                    <S.Icons>
                        < AiFillEdit color="#464d59" size={20} />
                        < AiFillDelete color="#464d59" size={20} />
                    </S.Icons>
                </S.Top>
                <S.Description>{data.description}</S.Description>
                <S.Link href={data.url}>{data.url}</S.Link>
            </S.Container>
        </>
    )
}
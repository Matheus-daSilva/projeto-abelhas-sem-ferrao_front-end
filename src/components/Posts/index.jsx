import * as S from "./styles.js";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { CgBee } from "react-icons/cg";
import { useEffect, useState } from "react"

export default function Posts(props) {
  const data = props;
  const userId = localStorage.getItem("userId")

  // useEffect(() => {

  // },[])

  if (Number(data.userId) === Number(userId)) {
    return (
      <>
        <S.Container key={data.id}>
          <S.Top>
            <S.Username>{data.username}</S.Username>
            <S.Icons>
              <AiFillEdit color="#464d59" size={20} />
              <AiFillDelete color="#464d59" size={20} />
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
}

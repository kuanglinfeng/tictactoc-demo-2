import React from 'react'
import { ChessEnum } from '../types/ChessEnum'
import styled from 'styled-components'
import { BlackChess, WhiteChess } from './Chess'

interface IProps {
  chess?: ChessEnum,
  id: string
}

const Wrapper = styled.div`
  width: 80px;  height: 80px;
  border: 1px solid black;
  box-sizing: border-box;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #DA0F47;
  }
`

function showChess(chess?: ChessEnum) {
  if (chess === ChessEnum.None) return null
  return chess === ChessEnum.Black ? <BlackChess /> : <WhiteChess />
}

function Square(props: IProps) {
  return (
    <Wrapper id={props.id}>
      { showChess(props.chess) }
    </Wrapper>
  )
}

export default Square
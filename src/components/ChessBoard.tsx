import React from 'react'
import styled from 'styled-components'
import Square from './Square'
import { ChessEnum } from '../types/ChessEnum'

const Wrapper = styled.div`
  margin: 50px 0;
  width: 240px; height: 240px;
  border: 1px solid black;
  display:flex;
  flex-wrap: wrap;
`

type Target = {
  id: string
}

interface IProps {
  chessList: ChessEnum[],
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function ChessBoard(props: IProps) {
  return (
    <Wrapper onClick={ (e) => {
      e.preventDefault()
      props.onClick(e)
    } }>
      {
        props.chessList.map((chess, index) => {
          return <Square chess={ chess } key={ index } id={ index.toString() } />
        })
      }
    </Wrapper>
  )
}

export default ChessBoard
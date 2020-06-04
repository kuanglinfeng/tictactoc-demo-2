import React from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { ChessEnum } from '../types/ChessEnum'
import { BlackChessIcon, WhiteChessIcon } from './Chess'
import { ChessSwitch } from './Game'

const Wrapper = styled(Title)`
  font-size: 1.2em;
  padding-top: 0;
  margin-top: 20px;
  display:flex;
  align-items: center;
  justify-content: center;
`

interface IProps {
  nowChess: ChessSwitch
}

function SwitchTip(props: IProps) {
  return (
    <Wrapper>
      <span>落子方：</span>
      <span>{ props.nowChess === ChessEnum.Black ? <BlackChessIcon /> : <WhiteChessIcon /> }</span>
    </Wrapper>
  )
}

export default SwitchTip
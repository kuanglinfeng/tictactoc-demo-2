import React, { useState } from 'react'
import ChessBoard from './ChessBoard'
import { ChessEnum } from '../types/ChessEnum'
import { Title } from './Title'
import styled from 'styled-components'
import SwitchTip from './SwitchTip'
import Restart from './Restart'

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

interface Target extends EventTarget {
  id: string
}

type IsEnding = boolean

function judgeWin(index: number, chessList: ChessEnum[]): IsEnding {
  // 1、通过落子，判断一方是否胜利
  // 横向判断
  const horMin = Math.floor(index / 3) * 3
  // 纵向判断
  const verMin = index % 3
  // eslint-disable-next-line no-mixed-operators
  if (!(chessList[horMin] === chessList[horMin + 1] && chessList[horMin + 1] === chessList[horMin + 2] ||
    // eslint-disable-next-line no-mixed-operators
    chessList[verMin] === chessList[verMin + 3] && chessList[verMin + 3] === chessList[verMin + 6] ||
    // eslint-disable-next-line no-mixed-operators
    chessList[0] === chessList[4] && chessList[4] === chessList[8] && chessList[0] !== ChessEnum.None ||
    // eslint-disable-next-line no-mixed-operators
    chessList[2] === chessList[4] && chessList[4] === chessList[6] && chessList[2] !== ChessEnum.None)
  ) {
  } else if (chessList[index] === ChessEnum.White) {
    alert('白子获胜')
    return true
  } else {
    alert('黑子获胜')
    return true
  }
  // 2、判断是否平局
  if (!chessList.includes(ChessEnum.None)) {
    alert('平局')
    return true
  }
  return false
}

export type ChessSwitch = Exclude<ChessEnum, ChessEnum.None>

function Game() {

  function getInitChessList() {
    return new Array(9).fill(ChessEnum.None)
  }

  const [isEnding, setIsEnding] = useState(false)

  const [nowChess, setNowChess] = useState(ChessEnum.Black)

  const initChessList: ChessEnum[] = getInitChessList()

  const [chessList, setChessList] = useState(initChessList)

  function handleChessBoardClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (isEnding) return
    const id = parseInt((e.target as Target).id)
    const chesses = [...chessList]
    if (chesses[id] === ChessEnum.None) {
      chesses[id] = nowChess
      setChessList([...chesses])
      setNowChess(nowChess === ChessEnum.Black ? ChessEnum.White : ChessEnum.Black)
      if (judgeWin(id, chesses)) {
        setIsEnding(true)
      }
    }
  }

  function handleRestartClick() {
    setChessList(getInitChessList())
    setNowChess(ChessEnum.Black)
    setIsEnding(false)
  }

  return (
    <Wrapper>
      <Title>井字棋游戏</Title>
      <SwitchTip nowChess={ nowChess as ChessSwitch } />
      <ChessBoard chessList={ chessList } onClick={ handleChessBoardClick } />
      <Restart onClick={ handleRestartClick } />
    </Wrapper>
  )
}

export default Game
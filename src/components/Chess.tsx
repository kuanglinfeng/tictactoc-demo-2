import styled from 'styled-components'

export const BlackChess = styled.div`
  width: 50px;  height: 50px;
  border-radius: 50%;
  background: radial-gradient(10px 10px at 15px 15px, #fff, #333);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`

export const WhiteChess = styled(BlackChess)`
  background: radial-gradient(15px 15px at 15px 15px, #fff, #e2e2e2);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const BlackChessIcon = styled(BlackChess)`
  display: inline-block;
  width: 16px;  height: 16px;
`

export const WhiteChessIcon = styled(WhiteChess)`
  display: inline-block;
  width: 16px;  height: 16px;
`
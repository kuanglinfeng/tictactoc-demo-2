import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  width: 100px; height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border: 1px solid #da0f47;
  border-radius: 6px;
  padding: 10px;
  color: #da0f47;
  margin-top: 20px;
  transition: all .2s;
  &:hover {
    background: rgba(218, 15, 71, .1);
  }
`

interface IProps {
  onClick: () => void
}

function Restart(props: IProps) {
  return <Button onClick={props.onClick}>重新开始</Button>
}

export default Restart
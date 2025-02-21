import React from 'react'
import styled from 'styled-components'
import { InputButtonProps } from './types'

const StyledButton = styled.button`
  width: 60px;
  height: 50px;
  gap: 10px;
  border-radius: 10px;
  border-width: 1px;
  background-color: #fff;
  background-image: url("src/static/InputButton.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 39px;
    height: 32px;
`

export const InputButton: React.FC<InputButtonProps> = ({addTask, value, changeValue}) => {
  const addTaskHandler = () => {
    addTask(value)
    changeValue('')
  }
  return <StyledButton onClick={addTaskHandler}></StyledButton>
}

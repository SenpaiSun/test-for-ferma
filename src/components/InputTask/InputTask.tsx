import React from 'react'
import { Input } from '../../ui/Input/Input'
import styled from 'styled-components'
import { InputButton } from '../../ui/InputButton/InputButton'
import { InputTaskProps } from './types'

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 21px;
  box-shadow: 0px 4px 17.8px 0px #0000001a;
  box-sizing: border-box;
`

export const InputTask: React.FC<InputTaskProps> = ({value, changeValue, addTask}) => {
  return (
    <StyledDiv>
      <Input value={value} changeValue={changeValue}/>
      {value && <InputButton changeValue={changeValue} addTask={addTask} value={value}/>}
    </StyledDiv>
  )
}

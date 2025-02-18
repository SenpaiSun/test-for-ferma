import React from 'react'
import { CardTask } from '../../../ui/CardTask/CardTask'
import styled from 'styled-components'

const StyledTaskDiv = styled.div`
  margin-top: 31px;
  width: 100%;
  gap: 20px;
`

export const Tasks: React.FC = () => {
  return (
    <StyledTaskDiv>
      <CardTask />
    </StyledTaskDiv>
  )
}

import React from 'react'
import styled from 'styled-components'
import { Title } from './ui/Title/Title'
import { InputTask } from './components/InputTask/InputTask'
import { Filters } from './components/InputTask/Filters/Filters'
import { Tasks } from './components/InputTask/Tasks/Tasks'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px;
`
const StyledContainerDiv = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledContainerDiv>
        <Title text='Список дел' />
        <InputTask />
        <Filters />
        <Tasks />
      </StyledContainerDiv>
    </StyledMain>
  )
}

export default App

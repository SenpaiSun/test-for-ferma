import React from 'react'
import styled from 'styled-components'
import { Title } from './ui/Title/Title'
import { InputTask } from './components/InputTask/InputTask'
import { Filters } from './components/Filters/Filters'
import { Tasks } from './components/Tasks/Tasks'
import { useAppSelector } from './hooks/hooks'
import { useActions } from './hooks/actions'

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
  const tasks = useAppSelector((state) => state.tasks.tasks)
  const inputValue = useAppSelector((state) => state.input.value)
  const { allTasks, addTask, deleteTask, changeStatusTask, changeValue } = useActions()
  console.log(tasks, inputValue)
  return (
    <StyledMain>
      <StyledContainerDiv>
        <Title text='Список дел' />
        <InputTask value={inputValue} changeValue={changeValue} addTask={addTask} />
        <Filters />
        <Tasks tasks={tasks} changeStatusTask={changeStatusTask} deleteTask={deleteTask} />
      </StyledContainerDiv>
    </StyledMain>
  )
}

export default App

import React, { useEffect } from 'react'
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
  @media (max-width: 768px) {
    margin: 30px 16px;
  }
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
  const filters = useAppSelector((state) => state.filter.filter)
  const { allTasks, addTask, deleteTask, changeStatusTask, changeValue, changeFilter, changeTextTask } = useActions()
  const tasksLocalStorage = localStorage.getItem('tasks')

  useEffect(() => {
    if (tasksLocalStorage) {
      allTasks(JSON.parse(tasksLocalStorage))
    }
  }, [])

  console.log(tasks, inputValue, filters)
  return (
    <StyledMain>
      <StyledContainerDiv>
        <Title text='Список дел' />
        <InputTask value={inputValue} changeValue={changeValue} addTask={addTask} />
        <Filters changeFilter={changeFilter} filters={filters} />
        <Tasks filters={filters} tasks={tasks} changeStatusTask={changeStatusTask} deleteTask={deleteTask} changeTextTask={changeTextTask} />
      </StyledContainerDiv>
    </StyledMain>
  )
}

export default App

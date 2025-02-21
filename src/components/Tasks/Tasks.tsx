import React from 'react'
import { CardTask } from './CardTask/CardTask'
import styled from 'styled-components'
import { TaskProps } from '../../state/cardTasks/types'
import { ComponentTasksProps } from './types'

const StyledTaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 31px;
  width: 100%;
  gap: 20px;
`

export const Tasks: React.FC<ComponentTasksProps> = ({ tasks, changeStatusTask, deleteTask, filters, changeTextTask }) => {
  const filteredTasks = tasks.filter((task: TaskProps) => {
    if (filters === 'All') {
      return task
    } else if (filters === 'Completed') {
      return task.confirmed
    } else if (filters === 'Uncompleted') {
      return !task.confirmed
    }
  })

  return (
    <StyledTaskDiv>
      {filteredTasks.map((task: TaskProps) => (
        <CardTask key={task.id} id={task.id} text={task.text} confirmed={task.confirmed} date={task.date} changeStatusTask={changeStatusTask} deleteTask={deleteTask} changeTextTask={changeTextTask} />
      ))}
    </StyledTaskDiv>
  )
}

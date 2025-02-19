import React from 'react'
import { CardTask } from './CardTask/CardTask'
import styled from 'styled-components'
import { TaskProps, TasksProps } from '../../state/cardTasks/types'

const StyledTaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 31px;
  width: 100%;
  gap: 20px;
`

export const Tasks: React.FC<TasksProps> = ({ tasks, changeStatusTask, deleteTask }) => {
  return (
    <StyledTaskDiv>
      {tasks.map((task: TaskProps) => (
        <CardTask key={task.id} id={task.id} text={task.text} confirmed={task.confirmed} date={task.date} changeStatusTask={changeStatusTask} deleteTask={deleteTask} />
      ))}
    </StyledTaskDiv>
  )
}

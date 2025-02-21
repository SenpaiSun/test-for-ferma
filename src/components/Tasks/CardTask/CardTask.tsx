import React from 'react'
import styled from 'styled-components'
import { formatDate } from '../../../hooks/formatDate'
import { CardTaskProps } from './types'

const StyledCardDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 20px;
  background: #fff;
  border-radius: 21px;
  box-shadow: 0px 4px 17.8px 0px #0000001a;
  box-sizing: border-box;
`

const StyledCardDateP = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 0 0 20px;
  color: #30324b;
`

const StyledCardTextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 30px;
  margin: 0;
`

const StyledConfirmButton = styled.button<{ $confirmed: boolean }>`
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.$confirmed ? '#6AD400' : '#a4a4a4')};
  background-color: ${(props) => (props.$confirmed ? '#6AD400' : '#FFF')};
  cursor: pointer;
`

const StyledTextP = styled.p<{ $confirmed: boolean }>`
  font-size: 16px;
  line-height: 1;
  margin: 0;
  color: #30324b;
  border: none;
  outline: none;
  width: 100%;
  max-width: 90%;
  text-decoration: ${(props) => (props.$confirmed ? 'line-through' : 'none')};
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`

const StyledButton = styled.button<{ type: string }>`
  width: 21px;
  height: 21px;
  padding: 2px;
  background: transparent;
  border: none;
  cursor: pointer;
  background-image: url(${(props) => (props.type === 'edit' ? 'src/static/edit.svg' : 'src/static/delete.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  &:hover {
    background-image: url(${(props) => (props.type === 'edit' ? 'src/static/edit-hover.svg' : 'src/static/delete-hover.svg')});
  }
  &:active {
    background-image: url(${(props) => (props.type === 'edit' ? 'src/static/edit-active.svg' : 'src/static/delete.svg')});
  }

  &:focus {
    outline: none;
    background-color: #a4a4a4;
  }
`

const StyledContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 12px;
`

const StyledInput = styled.input`
  max-width: 80%;
  border: none;
  border-bottom: 1px solid #a4a4a4;
  outline: none;
  font-size: 16px;
  line-height: 1;
  color: #30324b;
`
const StyledButtonConfirm = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: #0013ff;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color:#575A84;
  }
`

export const CardTask: React.FC<CardTaskProps> = ({ id, text, confirmed, date, changeStatusTask, deleteTask, changeTextTask }) => {
  const [isEdit, setIsEdit] = React.useState(false)
  const [valueTextTask, setValueTextTask] = React.useState(text)

  const saveTextTask = () => {
    setIsEdit((prev) => !prev)
    changeTextTask({id, valueTextTask})
  }

  return (
    <StyledCardDiv>
      <StyledCardDateP>{formatDate(date)}</StyledCardDateP>
      <StyledCardTextContainer>
        <StyledConfirmButton
          onClick={() => {
            changeStatusTask(id)
          }}
          $confirmed={confirmed}
        />
        {isEdit ? <StyledInput size={valueTextTask.length} onChange={(e) => setValueTextTask(e.target.value)} value={valueTextTask} /> : <StyledTextP $confirmed={confirmed}>{text}</StyledTextP>}
      </StyledCardTextContainer>
      <StyledContainerButtons>
        {isEdit && <StyledButtonConfirm onClick={() => saveTextTask()}>Сохранить</StyledButtonConfirm>}
        <StyledButton type='edit' onClick={() => setIsEdit((prev) => !prev)} />
        <StyledButton onClick={() => deleteTask(id)} type='delete' />
      </StyledContainerButtons>
    </StyledCardDiv>
  )
}

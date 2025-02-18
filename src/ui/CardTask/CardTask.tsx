import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '../../static/DeleteIcon'
import EditButton from '../../static/EditButton'


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
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 30px;
  margin: 0;
`

const StyledConfirmButton = styled.button`
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  border-radius: 50%;
  border: 2px solid #a4a4a4;
  background-color: #fff;
  cursor: pointer;
`

const StyledTextP = styled.p`
  weight: 400;
  font-size: 16px;
  line-height: 1;
  color: #30324b;
`

const StyledButton = styled.button<{ type: string}>`
  width: 21px;
  height: 21px;
  padding: 2px;
  background: transparent;
  border: none;
  cursor: pointer;
  background-image: url(${(props) => props.type === 'edit' ? 'src/static/edit.svg' : 'src/static/delete.svg'});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  &:hover {
    background-image: url(${(props) => props.type === 'edit' ? 'src/static/edit-hover.svg' : 'src/static/delete-hover.svg'});
  }
  &:active {
    background-image: url(${(props) => props.type === 'edit' ? 'src/static/edit-active.svg' : 'src/static/delete.svg'});
  }

  &:focus {
    outline: none;
    background-color: #A4A4A4;
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

export const CardTask: React.FC = () => {
  return (
    <StyledCardDiv>
      <StyledCardDateP>Сегодня</StyledCardDateP>
      <StyledCardTextContainer>
        <StyledConfirmButton />
        <StyledTextP>Завершить проект по настройке Vite для темы WordPress.Завершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPressЗавершить проект по настройке Vite для темы WordPress</StyledTextP>
      </StyledCardTextContainer>
      <StyledContainerButtons>
        <StyledButton type='edit'/>
        <StyledButton type='delete'/>
      </StyledContainerButtons>
    </StyledCardDiv>
  )
}

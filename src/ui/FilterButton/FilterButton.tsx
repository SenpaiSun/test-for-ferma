import React from 'react'
import styled from 'styled-components'
import { FilterProps } from './types'

const StyledButton = styled.button<FilterProps>`
  height: 36px;
  widht: max-content;
  border-radius: 10px;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  outline: none;
  padding: 0 10px;

  &:hover {
    background: ${(props) => props.backgroundHover};
    color: ${(props) => props.textColorHover};
  }
  &:focus {
    border-color: ${(props) => props.borderFocus};
  }
`

export const FilterButton: React.FC<FilterProps> = ({ idButton, text, textColorHover, color, backgroundHover, borderFocus }) => {
  console.log(idButton)
  return (
    <StyledButton textColorHover={textColorHover} color={color} backgroundHover={backgroundHover} borderFocus={borderFocus}>
      {text}
    </StyledButton>
  )
}

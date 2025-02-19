import React from 'react'
import styled from 'styled-components'
import { FilterProps } from './types'

const StyledButton = styled.button<{ $textColorHover: string, $color: string, $backgroundHover: string, $borderFocus: string}>`
  height: 36px;
  widht: max-content;
  border-radius: 10px;
  border: 2px solid ${(props) => props.$color};
  color: ${(props) => props.$color};
  background: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  outline: none;
  padding: 0 10px;

  &:hover {
    background: ${(props) => props.$backgroundHover};
    color: ${(props) => props.$textColorHover};
  }
  &:focus {
    border-color: ${(props) => props.$borderFocus};
  }
`

export const FilterButton: React.FC<FilterProps> = ({ idButton, textButton, textColorHover, colorButton, backgroundHover, borderFocus}) => {
  return (
    <StyledButton $textColorHover={textColorHover} $color={colorButton} $backgroundHover={backgroundHover} $borderFocus={borderFocus}>
      {textButton}
    </StyledButton>
  )
}

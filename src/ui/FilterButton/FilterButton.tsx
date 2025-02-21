import React from 'react'
import styled from 'styled-components'
import { FilterProps } from './types'

const StyledButton = styled.button<{ $textColorHover: string, $color: string, $backgroundHover: string, $borderFocus: string, $background: string, $borderColor: string}>`
  height: 36px;
  widht: max-content;
  border-radius: 10px;
  border: 2px solid ${(props) => props.$borderColor};
  color: ${(props) => props.$color};
  background: ${(props) => props.$background};
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const FilterButton: React.FC<FilterProps> = ({ filters, textButton, textColorHover, colorButton, backgroundHover, borderFocus, changeFilter, state}) => {
  return (
    <StyledButton onClick={() => changeFilter(state)} $textColorHover={textColorHover} $background={filters === state ? colorButton : '#fff'} $color={filters === state ? '#fff' : colorButton} $backgroundHover={backgroundHover} $borderFocus={borderFocus} $borderColor={colorButton}>
      {textButton}
    </StyledButton>
  )
}

import React from 'react'
import styled from 'styled-components'
import { TitleProps } from './type'

const StyledTitle = styled.h1`
  weight: 700;
  font-size: 96px;
  line-height: 1;
  color: #30324b;
`

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>
}

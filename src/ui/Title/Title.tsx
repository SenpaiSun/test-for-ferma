import React from 'react'
import styled from 'styled-components'
import { TitleProps } from './type'

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 96px;
  line-height: 1;
  color: #30324b;
  margin: 0;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>
}

import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  color: #30324b;
  outline: none;
  font-size: 24px;
  width: 100%;
  height: 100%;
`

export const Input: React.FC = () => {
  return (
    <StyledInput placeholder={'Введите название задачи'}>
    </StyledInput>
  );
};

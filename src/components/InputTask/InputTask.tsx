import React from 'react';
import { Input } from '../../ui/Input/Input';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 20px;
  background: #FFF;
  border-radius: 21px;
  box-shadow: 0px 4px 17.8px 0px #0000001A;
`

export const InputTask: React.FC = () => {
  return (
    <StyledDiv>
      <Input />
    </StyledDiv>
  );
};

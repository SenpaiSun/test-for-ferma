import React from 'react';
import styled from 'styled-components';
import { Title } from './ui/Title/Title';
import { InputTask } from './components/InputTask/InputTask';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px;
`

const App: React.FC = () => {
  return (
    <StyledMain>
      <Title text='Список дел'/>
      <InputTask />
    </StyledMain>
  );
};


export default App

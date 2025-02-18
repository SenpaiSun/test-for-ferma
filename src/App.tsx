import React from 'react';
import styled from 'styled-components';
import { Title } from './ui/Title/Title';
import { InputTask } from './components/InputTask/InputTask';
import { Filters } from './components/InputTask/Filters/Filters';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px;
  wrap: no-wrap;
`

const App: React.FC = () => {
  return (
    <StyledMain>
      <Title text='Список дел'/>
      <InputTask />
      <Filters />
    </StyledMain>
  );
};


export default App

import styled from 'styled-components';
import { InputProps } from './types';

const StyledInput = styled.input`
  border: none;
  color: #30324b;
  outline: none;
  font-size: 24px;
  width: 100%;
  height: 100%;
  min-height: 50px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Input: React.FC<InputProps> = ({value, changeValue}) => {

  return (
    <StyledInput placeholder={'Введите название задачи'} value={value} onChange={e => changeValue(e.target.value)}>
    </StyledInput>
  );
};

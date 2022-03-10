import styled from 'styled-components';

export const Container = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active === props.id ? '#808080' : '#2E8B57'} ;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: all ease .3s;
`;

export const ModuleName = styled.h1`
  font-size: 14px;
`;
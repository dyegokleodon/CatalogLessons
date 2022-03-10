import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:  #2E8B57;
  border-radius: 10px;
  margin-right: 10px;
  margin: 6px;
  padding: 4px;
  transition: all ease .3s;
`;

export const ModuleName = styled.h1`
  margin: 10px;
  font-size: 14px;
`;

export const ModuleActions = styled.div`
  margin: 10px;
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
`;
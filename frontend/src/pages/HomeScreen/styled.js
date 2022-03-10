import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

export const ModuleArea = styled.div`
  color: #fff;
  margin-top: 20px;
`;

export const ModuleList = styled.div` 
  display: flex;
  margin-top: 10px;
`;

export const LessonArea = styled.div` 
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const LessonList = styled.div` 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;
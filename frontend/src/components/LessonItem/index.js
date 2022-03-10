import React from 'react';
import {Container, LessonInfoArea, LessonName, LessonDate} from './styled'

export default ({data}) => {
  return(
    <Container>
      <LessonInfoArea>
        <LessonName>{data.name}</LessonName>
        <LessonDate>{data.date}</LessonDate>
      </LessonInfoArea>
    </Container>
  )
}
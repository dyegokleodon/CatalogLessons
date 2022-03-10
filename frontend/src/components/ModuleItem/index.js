import React from 'react';
import {Container, ModuleName} from './styled';

export default ({data, activeModule, setActiveModule}) => {
  
  const handleModuleClick = () => {
    setActiveModule(data.id);
  }

  return (
    <Container 
    active={activeModule} 
    id={data.id}
    onClick={handleModuleClick}
    
    >
       <ModuleName>{data.name} </ModuleName>
    </Container>
  );
}

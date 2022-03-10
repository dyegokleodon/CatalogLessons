import React, {useState} from 'react';
import api from '../../api';

import {Container, ModuleName, ModuleActions} from './styled';

export default ({data }) => {
  const[catchId, setCatchId] = useState(0)
  
  const handleDeleteClick = async(e) => {
    e.preventDefault();
    if(window.confirm('deseja excluir?'))
    {
      setCatchId(data.id);  

      const json = await api.delModule(catchId)

      if(!json.error){
        alert('Modulo deletado')
      }
      else{
        alert('erro')
      }
    }
    
  }

  const handleUpdateClick = async(e) => {
    e.preventDefault();
    if(window.confirm('deseja excluir?'))
    {
      setCatchId(data.id);  

      const json = await api.delModule(catchId)

      if(!json.error){
        alert('Modulo Atualizado')
      }
      else{
        alert('erro')
      }
    }
    
  }

  console.log(catchId);
  return (
    <Container>
       <ModuleName>{data.name} </ModuleName>
       <ModuleActions
        
       >
         <button 
           id={data.id}
           onClick={handleUpdateClick}
          > 
            Atualizar
          </button>  
         <button
          id={data.id}
          onClick={handleDeleteClick}
         >
           Deletar
         </button>  
      </ModuleActions>
      
    </Container>
  );
}

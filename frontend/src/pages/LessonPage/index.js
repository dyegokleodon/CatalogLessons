import React, {useState, useEffect} from 'react';
import {Container, PageTitle, PageArea} from './styled';


import api from '../../api';


export default () => {
  
  const [modules, setModules] = useState([]);
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [module, setModule] = useState('');
  
  
  const [desabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  useEffect(()=>{
   const getModules = async () => {
    const mod = await api.getModules();
    setModules(mod)
   }
    getModules();
  },[]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    let errors = [];

    if(!name.trim()){
      errors.push('Sem nome');
    }
    if(!date){
      errors.push('Sem data');
    }
    if(!module){
      errors.push('Sem modulo');
    }

    if(errors.length === 0){
      const json = await api.addLesson(name, date, module)

      if(!json.error){
        alert('Aula Cadastrada');
        setName('');
        setDate('');
        setModules('');
      }
    } else {
      setError(errors.join("\n"));
      alert('erro');
    }
    setDisabled(false);
  }
 
  return (
    <Container>
      <PageTitle>Cadastro de Aulas</PageTitle>
      <PageArea>
        {error && error.message}
        <form onSubmit={handleSubmit}>
          <label className='area'>
            <div className="area-title">Nome da aula</div>  
            <div className="area-input">
              <input 
                required
                type="text" 
                name="name" 
                id="name" 
                disabled={desabled}
                value={name}
                onChange={e=>setName(e.target.value)}
              />
            </div>  
          </label>

          <label className='area'>
            <div className="area-title">Data da aula</div>  
            <div className="area-input">
              <input 
                required
                type="date" 
                name="date" 
                id="date" 
                disabled={desabled}
                value={date}
                onChange={e=>setDate(e.target.value)}
              />
            </div>  
          </label>

          <label className='area'>
            <div className="area-title">Modulo</div>  
            <div className="area-input">
              <select
                disabled={desabled}
                onChange={e=>setModule(e.target.value)}
              >
                <option></option>
                {
                  modules && modules.map(item => 
                    <option key={item.id} value={item.id}>{item.name}</option> 
                  )
                }
              </select>
            </div>  
          </label>


          <label className='area'>
            <div className="area-title"></div>  
            <div className="area-input">
              <button disabled={desabled}>Cadastrar Módulo</button>
            </div>  
          </label>
        </form>
      </PageArea>
      
    </Container>
  );
} 
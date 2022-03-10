import React, {useState, useEffect} from 'react';
import {Container, PageTitle, PageArea, ModuleArea, ModuleLists} from './styled';

import ModuleList from '../../components/ModuleList';

import api from '../../api';
import {doLogout} from '../../helpers/AuthHandler';

export default () => {
  //const history = useHistory();

  const [modules, setModules] = useState([]);
  const [name, setName] = useState('');
  const [desabled, setDisabled] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    
    
    const json = await api.addModule(name);
    
    if(!json.error){
        alert('Modulo cadastrado')
    }else{
        setError(json.error);
    }
    
     setDisabled(false);
  }

  useEffect(()=>{
    const getModules =  async () => {
        const mod = await api.getModules();
        // eslint-disable-next-line
        setModules(mod);

    };
    getModules();
  },[]);

  const handleLogout  = () => {
    doLogout();
    window.location.href = '/';
  }
  return (
    <Container>
      <PageTitle>
        Cadastro de Módulo
        <button onClick={handleLogout}>Sair</button>
      </PageTitle>
      <PageArea>
        {error && error.message}
        <form onSubmit={handleSubmit}>
          <label className='area'>
            <div className="area-title">Nome do Módulo</div>  
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
            <div className="area-title"></div>  
            <div className="area-input">
              <button disabled={desabled}>Cadastrar Módulo</button>
            </div>  
          </label>
        </form>
      </PageArea>
      <ModuleArea>  
        <ModuleLists>
            {modules.map((item, index)=>(
                <ModuleList 
                    key={index} 
                    data={item}  
                />
            ))}
        </ModuleLists>
      </ModuleArea>
    </Container>
  );
} 
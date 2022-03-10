import React, {useState} from 'react';
import {Container, PageTitle, PageArea} from './styled';

import api from '../../api';
import {doLogin} from '../../helpers/AuthHandler';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [desabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    const json = await api.login(email, password);

    if(!json){
      setError(json.error)
    }else{
      doLogin(json.token);
      window.location.href = '/modulos';
    }

    setDisabled(false);
  }
  
  return (
    <Container>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error && error.message}
        <form onSubmit={handleSubmit}>
          <label className='area'>
            <div className="area-title">E-mail</div>  
            <div className="area-input">
              <input 
                required
                type="email" 
                name="email" 
                id="email" 
                disabled={desabled}
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </div>  
          </label>

          <label className='area'>
            <div className="area-title">Senha</div>  
            <div className="area-input">
              <input 
                required
                type="password" 
                name="password" 
                id="password" 
                disabled={desabled}
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </div>  
          </label>

          <label className='area'>
            <div className="area-title"></div>  
            <div className="area-input">
              <button disabled={desabled}>Login</button>
            </div>  
          </label>
        </form>
      </PageArea>
    </Container>
  );
} 
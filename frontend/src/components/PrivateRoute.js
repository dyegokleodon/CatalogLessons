import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {isLogged} from '../helpers/AuthHandler';

export default ({children, ...rest}) => {

  let logged = isLogged();
  let authorized = (rest.private && !logged) ? false : true;

  // const history = useHistory();
  // const token = useSelector(state => state.user.token);

  // if(!token){
  //   history.push('/login')
  //   return null;
  // }

  return (
    <Route 
      {...rest}
      render={ () => 
        authorized ? children : <Redirect to='/login' />
      }
    
    />
  );
}
import Cookies from 'js-cookie';

let BASE = 'http://localhost:3333'

const apiFetchPost = async (endpoint, body) => {
  if(!body.token){
    var token = Cookies.get('token');
    
    if(token){
      body.token = token;   
      console.log(body.token);  
    }
  }
  const res = await fetch(BASE+endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',  
      'Authorization': 'token '+token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }); 
  const json = await res.json();
  if(!json){
    window.location.href = '/login';
    return;
  }
  return json;
  
}

export default {
  
  login: async (email, password) => {
    const json = await apiFetchPost(
      '/sessions',
      {email, password}
      
    );
    return json;
  },
  addModule: async (name) => {
    const json = await apiFetchPost(
      '/modules', 
      {name}
    );
    return json;
  },

  delModule: async (id) => {
    var token = Cookies.get('token');
    const json = await fetch(`${BASE}/modules/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'token '+token
      }
    })
    
    return json;
  },

  addLesson: async (name, date, module) => {
    const json = await apiFetchPost(
      `/modules/${module}/lessons`, 
      {name, date}
    );
    return json;
  },

  getModules: async () => {
    //GET /modules/
    const res = await fetch(`${BASE}/modules`)
    const json = await res.json();

    return json;
  },

  getLessons: async (activeModule) => {
    //GET /lessons/
    const res = await fetch(`${BASE}/modules/${activeModule}/lessons`)
    const json = await res.json();

    return json;
  },

  
};
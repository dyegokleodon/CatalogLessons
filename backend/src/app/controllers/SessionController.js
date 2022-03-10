import jwt from 'jsonwebtoken';

import authconfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const{email, password} = req.body; 

    const user = await User.findOne({where: {email}});

    if(!user){
      return res.status(401).json({error: 'User not Found'});
    }

    if(!(await user.checkPassword(password))){
      return res.status(401).json({error: 'Password does not match'});
    }

    const {id, name} = user;

    return res.json({
      user: {
        id, 
        name, 
        email
      },
      token: jwt.sign({id}, authconfig.secret, {
        expiresIn: authconfig.expiresIn,
      }),
    })
  }
}

export default new SessionController();
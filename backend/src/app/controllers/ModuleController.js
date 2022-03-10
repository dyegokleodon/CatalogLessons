import * as Yup from 'yup';

import Module from '../models/Module';

class ModuleController {
  
  async index (req, res){
    const modules = await Module.findAll({
      order: ['name'],
      attributes: ['id', 'name']
    });

    return res.json(modules);
  }
  
  async store (req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails'})
    }

    const moduleExists = await Module.findOne({where: {name: req.body.name}})

    if(moduleExists) {
      return res.status(400).json({error: 'Module already exists'});
    }
    const {id, name} = await Module.create(req.body);

    return res.json({id,name});
  }
  
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails'})
    }

    const {name} = req.body;
    const {id} = req.params
    
    const module = await Module.findByPk(id)
    
    const nameExists = await Module.findOne( {where: {name}})

    if(nameExists){
      return res.status(400).json({error: 'Name already exists'});
    }

    await module.update(req.body);

    return res.json(name);
  }

  async delete(req, res){
    const {id} = req.params

    const module = await Module.findByPk(id);

    if(!module) {
      return res.status(400).json({error: 'User not found'})
    }

    await module.destroy()

    return res.json({message: 'module deleted'})
  }
}

export default new ModuleController();
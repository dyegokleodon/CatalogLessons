import * as Yup from 'yup';
import {parseISO, isBefore} from 'date-fns';

import Lesson from '../models/Lesson';
import Module from '../models/Module'

class LessonController {
  async index(req, res) {
    const {page = 1} = req.params

    const {module_id} = req.params;

    const module = await Module.findByPk(module_id, {
      order: ['name'],
      attributes: ['id','name'],
      limit: 20,
      offset: (page - 1) * 20,
      include: {
        association: 'lessons', 
        attributes: ['id','name','date'],
      }
        
    });

    return res.json(module)
  }

  async store(req, res) {
    
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      date: Yup.date().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({eror: 'validation fails'})
    }
    
    const {module_id} = req.params
    const {name, date } = req.body;
    
    const module = await Module.findByPk(module_id);

    if(!module){
      return res.status(400).json({error: 'User not found'})
    }

     const hour = parseISO(date);

     if(isBefore(hour, new Date())){
        return res.status(400).json({error: 'past date are no permited'});
     }

    const lesson = await Lesson.create({
      name,
      date: hour,
      module_id,
    });
    return res.json({name, date, module_id});
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails'})
    }

    const {id} = req.params
    
    const lesson = await Lesson.findByPk(id)

    if(!lesson){
      return res.status(400).json({error: 'User not found'})
    }
    
    const {name, date, module_id} = await lesson.update(req.body);

    return res.json({
      name,
      date,
      module_id
    });
  }

  async delete(req, res){
    const {id} = req.params

    const lesson = await Lesson.findByPk(id);

    if(!lesson) {
      return res.status(400).json({error: 'User not found'})
    }

    await lesson.destroy()
    return res.json({message: 'lesson deleted'})
  }

}

export default new LessonController();